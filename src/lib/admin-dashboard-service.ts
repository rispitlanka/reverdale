import { connectDB } from "@/lib/db";
import Order from "../../lib/models/Order";
import Appointment from "../../lib/models/Appointment";

type SellMetalRequest = {
  customerName: string;
  metalType: string | null;
  date: string;
};

type NewPurchase = {
  orderId: string;
  customerName: string;
  totalAmount: number;
  date: string;
};

export type UpcomingAppointment = {
  id: string;
  customerName: string;
  phone: string;
  date: string;
  purpose: string;
  status: string;
};

export type AdminDashboardData = {
  sellMetalRequests: {
    count: number;
    items: SellMetalRequest[];
  };
  newPurchases: {
    count: number;
    items: NewPurchase[];
  };
  upcomingAppointments: UpcomingAppointment[];
};

export async function getAdminDashboardData(): Promise<AdminDashboardData> {
  await connectDB();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [sellMetalRaw, newPurchasesRaw, appointmentsRaw] = await Promise.all([
    Order.aggregate([
      { $match: { orderStatus: "new" } },
      { $unwind: "$items" },
      { $match: { "items.itemType": "sell-metal" } },
      {
        $project: {
          _id: 0,
          customerName: 1,
          metalType: "$items.metalType",
          date: "$createdAt",
        },
      },
      { $sort: { date: 1 } },
    ]),
    Order.aggregate([
      {
        $match: {
          orderStatus: "new",
          paymentStatus: "pending",
        },
      },
      {
        $project: {
          _id: 0,
          orderId: "$orderRef",
          customerName: 1,
          totalAmount: 1,
          date: "$createdAt",
        },
      },
      { $sort: { date: -1 } },
    ]),
    Appointment.find({
      date: { $gte: today },
    })
      .sort({ date: 1 })
      .lean(),
  ]);

  const sellMetalRequests: AdminDashboardData["sellMetalRequests"] = {
    count: sellMetalRaw.length,
    items: sellMetalRaw.map((doc: any) => ({
      customerName: doc.customerName,
      metalType: doc.metalType ?? null,
      date: (doc.date instanceof Date ? doc.date : new Date(doc.date)).toISOString(),
    })),
  };

  const newPurchases: AdminDashboardData["newPurchases"] = {
    count: newPurchasesRaw.length,
    items: newPurchasesRaw.map((doc: any) => ({
      orderId: doc.orderId,
      customerName: doc.customerName,
      totalAmount: doc.totalAmount,
      date: (doc.date instanceof Date ? doc.date : new Date(doc.date)).toISOString(),
    })),
  };

  const upcomingAppointments: AdminDashboardData["upcomingAppointments"] =
    appointmentsRaw.map((doc: any) => ({
      id: doc._id.toString(),
      customerName: doc.customerName,
      phone: doc.phone,
      date: (doc.date instanceof Date ? doc.date : new Date(doc.date)).toISOString(),
      purpose: doc.purpose,
      status: doc.status,
    }));

  return {
    sellMetalRequests,
    newPurchases,
    upcomingAppointments,
  };
}

