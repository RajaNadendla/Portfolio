import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">Raja Kumar Nadendla</h1>
        <p className="text-xl text-gray-300 mb-6">
          Product Manager | AI Search Strategist | Building the future of intelligent discovery
        </p>
        <nav className="space-x-6 mb-8">
          <Link href="/about" className="text-blue-400 hover:underline">About</Link>
          <Link href="/projects" className="text-blue-400 hover:underline">Projects</Link>
          <Link href="/blog" className="text-blue-400 hover:underline">Blog</Link>
          <Link href="/contact" className="text-blue-400 hover:underline">Contact</Link>
        </nav>
        <h2 className="text-2xl font-semibold">Welcome to my personal site</h2>
        <p className="text-gray-400 mt-4">Stay tuned for more!</p>
      </div>
    </main>
  );
}
