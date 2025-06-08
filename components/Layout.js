import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="w-full p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Raja Nadendla</h1>
        <nav className="space-x-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="p-6 text-center text-sm text-gray-500 border-t border-gray-800">
        © 2025 Raja Kumar Nadendla. All rights reserved.
      </footer>
    </div>
  );
}
