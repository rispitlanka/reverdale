import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { connectDB } from "@/lib/db";
import Banner, { BannerSlot } from "@/models/Banner";

const VALID_SLOTS: BannerSlot[] = ["header", "middle1", "middle2"];

function isValidSlot(slot: string): slot is BannerSlot {
  return VALID_SLOTS.includes(slot as BannerSlot);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slot: string } }
) {
  const { slot } = params;

  if (!isValidSlot(slot)) {
    return NextResponse.json(
      { error: "Invalid banner slot" },
      { status: 400 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "banners"
    );

    await fs.mkdir(uploadDir, { recursive: true });

    const originalName =
      typeof file.name === "string" && file.name
        ? file.name
        : "banner-image";
    const ext = path.extname(originalName) || ".png";

    const filename = `${slot}-${Date.now()}${ext}`;
    const filePath = path.join(uploadDir, filename);

    await fs.writeFile(filePath, buffer);

    const imageUrl = `/uploads/banners/${filename}`;

    await connectDB();

    const updated = await Banner.findOneAndUpdate(
      { slot },
      { imageUrl },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).lean();

    return NextResponse.json(
      {
        slot: updated.slot,
        imageUrl: updated.imageUrl,
        id: updated._id?.toString() ?? null,
        createdAt: updated.createdAt ?? null,
        updatedAt: updated.updatedAt ?? null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating banner", error);
    return NextResponse.json(
      { error: "Failed to update banner" },
      { status: 500 }
    );
  }
}

