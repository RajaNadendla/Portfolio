import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); }, [darkMode]);

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Raja Nadendla</title>
        <meta name="description" content="Portfolio of Raja Nadendla - Search PM, AI Enthusiast" />
      </Head>
      <nav className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between">
        <div><strong>Raja Nadendla</strong></div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '☀️' : '🌙'}</button>
        </div>
      </nav>
      <main className="p-8">{children}</main>
      <footer className="text-center py-4 text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Raja Nadendla</footer>
    </div>
  );
}
