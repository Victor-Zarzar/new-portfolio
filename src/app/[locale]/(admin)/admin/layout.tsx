import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AdminNavbar } from "@/app/widgets/navbar-admin/navbar-admin";
import { auth } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user.isAdmin) {
    redirect("/auth/signin");
  }

  return (
    <>
      <AdminNavbar user={session.user} />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
