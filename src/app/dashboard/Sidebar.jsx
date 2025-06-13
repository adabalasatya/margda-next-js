import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/reports">Reports</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
