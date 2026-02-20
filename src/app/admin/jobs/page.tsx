import { JobsAdmin } from "@/components/admin/JobsAdmin";

export const metadata = {
  title: "Admin Jobs"
};

export default function AdminJobsPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">Jobs</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Manage Jobs</h1>
        <p className="mt-2 text-sm text-slate-300">Publish and update open roles.</p>
      </div>
      <JobsAdmin />
    </div>
  );
}
