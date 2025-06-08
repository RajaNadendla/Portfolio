import Head from 'next/head';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Raja Kumar Nadendla</title>
      </Head>
      <Hero />
    </Layout>
  );
}
