import Link from "next/link";

const links = [
  { label: "Overview", href: "/dashboard" },
  { label: "Student", href: "/student" },
  { label: "Teacher", href: "/teacher" },
  { label: "Admin", href: "/admin" },
];

export default function Sidebar() {
  return (
    <aside className="h-[calc(100vh-57px)] w-64 border-r bg-white p-4">
      <div className="text-xs font-semibold uppercase text-gray-500">
        Workspace bangladesh
      </div>

      <nav className="mt-3 flex flex-col gap-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
