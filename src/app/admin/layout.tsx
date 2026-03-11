import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 min-h-screen overflow-y-auto">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 lg:px-8">
            <header className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                  Admin Panel
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your gold jewellery e-commerce catalog, prices, and orders.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#B8860B]/10 px-3 py-1 text-xs font-medium text-[#B8860B]">
                Gold Admin
              </span>
            </header>
            <section>{children}</section>
          </div>
        </main>
      </div>
    </div>
  );
}

