import { getCurrentSession } from "@/lib/sessions";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = await getCurrentSession();

  if (!user || user.role !== Role.ADMIN) {
    redirect("/login");
  }

  return <>{children}</>;
}
