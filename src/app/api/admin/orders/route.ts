import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "../../../../../lib/models/Order";

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const pageParam = searchParams.get("page") ?? "1";
    const limitParam = searchParams.get("limit") ?? "20";
    const orderStatus = searchParams.get("orderStatus");
    const paymentStatus = searchParams.get("paymentStatus");

    const page = Number.parseInt(pageParam, 10);
    const limit = Number.parseInt(limitParam, 10);

    const safePage = Number.isNaN(page) || page < 1 ? 1 : page;
    const safeLimit =
      Number.isNaN(limit) || limit < 1 || limit > 100 ? 20 : limit;

    const query: Record<string, unknown> = {};

    if (orderStatus) {
      query.orderStatus = orderStatus;
    }

    if (paymentStatus) {
      query.paymentStatus = paymentStatus;
    }

    const [orders, totalItems] = await Promise.all([
      Order.find(query)
        .sort({ createdAt: -1 })
        .skip((safePage - 1) * safeLimit)
        .limit(safeLimit)
        .lean(),
      Order.countDocuments(query),
    ]);

    const data = orders.map((order: any) => ({
      id: order._id.toString(),
      orderRef: order.orderRef,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone,
      totalAmount: order.totalAmount,
      paymentStatus: order.paymentStatus,
      orderStatus: order.orderStatus,
      createdAt: order.createdAt,
    }));

    const totalPages =
      safeLimit === 0 ? 1 : Math.max(1, Math.ceil(totalItems / safeLimit));

    return NextResponse.json(
      {
        data,
        page: safePage,
        limit: safeLimit,
        totalItems,
        totalPages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders", error);
    return NextResponse.json(
      { error: "Failed to load orders" },
      { status: 500 }
    );
  }
}


