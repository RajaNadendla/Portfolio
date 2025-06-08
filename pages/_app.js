import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold">Raja Nadendla</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
