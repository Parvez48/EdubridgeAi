import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-600">
        Choose where you want to go.
      </p>

      <div className="mt-6 flex gap-3">
        <Link href="/student" className="rounded-lg border bg-white px-4 py-2 text-sm hover:bg-gray-50">
          Student
        </Link>
        <Link href="/teacher" className="rounded-lg border bg-white px-4 py-2 text-sm hover:bg-gray-50">
          Teacher
        </Link>
        <Link href="/admin" className="rounded-lg border bg-white px-4 py-2 text-sm hover:bg-gray-50">
          Admin
        </Link>
      </div>
    </main>
  );
}

