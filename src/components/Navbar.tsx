import Link from "next/link";

export default function Navbar() {
  const nav = [
    { label: "Home", href: "/" },
    { label: "Login", href: "/login" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          EduBridge AI
        </Link>

        <nav className="flex gap-3">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
