"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", icon: "📊", label: "Dashboard" },
    { href: "/profile", icon: "👤", label: "Profile" },
    { href: "/pendaftaran", icon: "📝", label: "Pendaftaran" },
    { href: "/students", icon: "👨‍🎓", label: "Students" },
    { href: "/soal", icon: "📚", label: "Bank Soal" },
    { href: "/test+", icon: "👨‍🎓", label: "Hasil Test" },
  ];

  return (
    <aside className="w-60 h-screen bg-white p-6 border-r flex flex-col  fixed top-0 left-0">
      <div className="mb-10">
        <Image src="/assets/MQ.png" alt="Logo MQ" width={200} height={200} />
      </div>
      <nav className="flex flex-col gap-6 w-full">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded text-gray-700 hover:text-blue-600 hover:bg-gray-100 ${
              pathname === item.href ? "bg-gray-100 text-blue-600 font-semibold" : ""
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
