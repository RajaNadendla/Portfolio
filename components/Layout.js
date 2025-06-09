
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return (
    <>
      <Head>
        <title>Raja Nadendla</title>
        <meta name="description" content="Portfolio of Raja Nadendla - AI & Search Product Manager" />
      </Head>
      <Navbar toggleDark={() => setDark(!dark)} isDark={dark} />
      <main>{children}</main>
    </>
  );
}
