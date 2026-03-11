import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Metal from "../../../../../lib/models/Metal";

export async function GET() {
  try {
    await connectDB();

    const metals = await Metal.find().lean();

    const result = metals.map((metal: any) => ({
      id: metal._id.toString(),
      name: metal.name,
      basePrice: metal.basePrice,
      imageUrl: metal.imageUrl,
      createdAt: metal.createdAt,
      updatedAt: metal.updatedAt,
    }));

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error fetching metals", error);
    return NextResponse.json(
      { error: "Failed to load metals" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, basePrice, imageUrl } = body;

    if (!name || typeof basePrice !== "number" || Number.isNaN(basePrice)) {
      return NextResponse.json(
        { error: "name and numeric basePrice are required" },
        { status: 400 }
      );
    }

    const metal = await Metal.create({
      name,
      basePrice,
      imageUrl,
    });

    return NextResponse.json(
      {
        id: metal._id.toString(),
        name: metal.name,
        basePrice: metal.basePrice,
        imageUrl: metal.imageUrl,
        createdAt: metal.createdAt,
        updatedAt: metal.updatedAt,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating metal", error);

    if (error?.code === 11000) {
      return NextResponse.json(
        { error: "A metal with this name already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create metal" },
      { status: 500 }
    );
  }
}

