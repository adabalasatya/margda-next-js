import DashboardNavbar from '@/components/Dashboard/DashboardNavbar/page'
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/page"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-y-auto">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="bg-white flex-grow overflow-auto border-gray-300">
          {children}
        </main>
      </div>
    </div>
  );
}