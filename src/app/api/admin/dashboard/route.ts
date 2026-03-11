import { NextResponse } from "next/server";
import { getAdminDashboardData } from "@/lib/admin-dashboard-service";

export async function GET() {
  try {
    const data = await getAdminDashboardData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching admin dashboard data", error);
    return NextResponse.json(
      { error: "Failed to load admin dashboard data" },
      { status: 500 }
    );
  }
}

