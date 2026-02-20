import { Container } from "@/components/Container";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "Admin Login"
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-lab-bg">
      <Container className="py-20">
        <div className="mx-auto max-w-lg space-y-6 rounded-2xl border border-white/10 bg-lab-glass p-8 shadow-glow">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">XD TECH</p>
            <h1 className="mt-3 text-2xl font-semibold text-white">Admin Access</h1>
            <p className="mt-2 text-sm text-slate-300">Sign in with your owner credentials.</p>
          </div>
          <AdminLoginForm />
        </div>
      </Container>
    </div>
  );
}
