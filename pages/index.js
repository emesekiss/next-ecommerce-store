import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Peas Be Mine</title>
      </Head>
      <h1>Welcome to Peas Be Mine!</h1>
      <img
        style={{
          height: 250,
          borderRadius: 30,
        }}
        src="/vegetable3.jpg"
        alt="Vegetables"
      />
    </Layout>
  );
}
