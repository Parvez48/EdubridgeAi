import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-6xl">
      <Sidebar />
      <div className="min-h-[calc(100vh-57px)] flex-1 bg-gray-50">
        {children}
      </div>
    </div>
  );
}
