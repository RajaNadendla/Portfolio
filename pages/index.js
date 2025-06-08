import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">Raja Kumar Nadendla</h1>
      <p className="text-lg text-gray-700 mb-6">
        Search Product Manager | AI & LLM Specialist | Thought Leader in AI-Powered Search
      </p>

      <nav className="space-x-4 mb-6">
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/blog" className="text-blue-500 hover:underline">Blog</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>

      <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
      <p className="text-md text-gray-600 mb-4">
        This is my digital portfolio where I write about Search, AI, and Product Leadership.
      </p>
    </main>
  );
}
