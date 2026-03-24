import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "../../../../../../../lib/models/Order";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(_request: Request, { params }: RouteContext) {
  try {
    await connectDB();
    const { id } = await params;

    const order = await Order.findById(id);
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (order.paymentStatus === "paid") {
      return NextResponse.json(
        { message: "Order is already marked as paid.", paymentStatus: "paid" },
        { status: 200 }
      );
    }

    order.paymentStatus = "paid";
    await order.save();

    return NextResponse.json(
      {
        message: "Order marked as paid.",
        paymentStatus: order.paymentStatus,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error marking order paid", error);
    return NextResponse.json(
      { error: "Failed to update payment status" },
      { status: 500 }
    );
  }
}
