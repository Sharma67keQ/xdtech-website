import { AdminShell } from "@/components/admin/AdminShell";
import { AdminLogout } from "@/components/admin/AdminLogout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminShell>
      <div className="flex items-center justify-end">
        <AdminLogout />
      </div>
      {children}
    </AdminShell>
  );
}
