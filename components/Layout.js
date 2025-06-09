import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return (
    <div>
      <Head>
        <title>Raja Nadendla</title>
        <meta name="description" content="Portfolio of Raja Nadendla - AI & Search Product Manager" />
      </Head>
      <nav>
        <Link href="/">Home</Link>{' | '}
        <Link href="/about">About</Link>{' | '}
        <Link href="/projects">Projects</Link>{' | '}
        <Link href="/blog">Blog</Link>{' | '}
        <Link href="/contact">Contact</Link>
        <button onClick={() => setDark(!dark)} style={{ float: 'right' }}>{dark ? '☀️' : '🌙'}</button>
      </nav>
      <main>{children}</main>
    </div>
  );
}
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
