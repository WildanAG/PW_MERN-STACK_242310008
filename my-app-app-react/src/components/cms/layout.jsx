import Sidebar from "@/components/cms/components/sidebar";
import Modals from "@/components/ui/modals";
import "@/app/cms/cms.css";
import ProtectedRoute from "@/components/auth/protectedRoutes";

export default function CMSLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="cms-container">
        <Sidebar />
        <main className="main-content p-4">{children}</main>
      </div>
      <Modals />
    </ProtectedRoute>
  );
}