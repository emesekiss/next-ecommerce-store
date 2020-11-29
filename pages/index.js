import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Peas Be Mine</title>
      </Head>

      <img
        style={{
          width: '100%',
          display: 'flex',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
        src="/background.jpg"
        alt="farm"
      />
    </Layout>
  );
}
