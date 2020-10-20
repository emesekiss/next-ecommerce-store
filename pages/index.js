import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Peas Be Mine</title>
      </Head>
      {/* <h1>Welcome to Peas Be Mine!</h1> */}
      <img
        style={{
          width: 900,
          // borderRadius: 30,
          display: 'flex',
        }}
        src="/home.jpg"
        alt="farm"
      />
    </Layout>
  );
}
