import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <h2>Get in touch</h2>

        <p>E-mail: veggies@fruits.com</p>
        <p>Phone: 00222233333002</p>
        <p>Address: Vegtable City, 10201020 Fruit street 3/1</p>
      </Layout>
    </div>
  );
}
