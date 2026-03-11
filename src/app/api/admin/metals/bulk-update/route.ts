import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Metal from "../../../../../../lib/models/Metal";

type AdjustmentType = "increase" | "decrease";

type RequestBody = {
  metalId?: string;
  adjustmentType?: AdjustmentType;
  percentage?: number;
};

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = (await request.json()) as RequestBody;
    const { metalId, adjustmentType, percentage } = body;

    if (!metalId) {
      return NextResponse.json(
        { error: "metalId is required" },
        { status: 400 }
      );
    }

    if (adjustmentType !== "increase" && adjustmentType !== "decrease") {
      return NextResponse.json(
        { error: "adjustmentType must be 'increase' or 'decrease'" },
        { status: 400 }
      );
    }

    if (
      typeof percentage !== "number" ||
      Number.isNaN(percentage) ||
      percentage < 0.01 ||
      percentage > 100
    ) {
      return NextResponse.json(
        { error: "percentage must be a number between 0.01 and 100" },
        { status: 400 }
      );
    }

    const metal = await Metal.findById(metalId);

    if (!metal) {
      return NextResponse.json(
        { error: "Metal not found" },
        { status: 404 }
      );
    }

    const factor =
      adjustmentType === "increase"
        ? 1 + percentage / 100
        : 1 - percentage / 100;

    const oldBasePrice = metal.basePrice;
    const newBasePrice = Math.round(oldBasePrice * factor * 100) / 100;

    metal.basePrice = newBasePrice;
    await metal.save();

    return NextResponse.json(
      {
        id: metal._id.toString(),
        name: metal.name,
        oldBasePrice,
        newBasePrice,
        imageUrl: metal.imageUrl,
        createdAt: metal.createdAt,
        updatedAt: metal.updatedAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error applying bulk metal update", error);
    return NextResponse.json(
      { error: "Failed to apply bulk metal update" },
      { status: 500 }
    );
  }
}

