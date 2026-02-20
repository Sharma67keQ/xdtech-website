import { NewsAdmin } from "@/components/admin/NewsAdmin";

export const metadata = {
  title: "Admin News"
};

export default function AdminNewsPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">News</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Manage News</h1>
        <p className="mt-2 text-sm text-slate-300">Publish updates, research, and investor announcements.</p>
      </div>
      <NewsAdmin />
    </div>
  );
}
