import Layout from '../components/Layout';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div>
      <Layout>
        <Head>
          <title>About us</title>
        </Head>

        <h2>About us</h2>

        <p>
          Peas be mine is a webshop. We sell locally produced organic vegtables
          and fruits from four locations. <br />
          Magnolia Ranch. Birch Wood Farm. Elm Tree Farm. Lake View Farm. <br />
          It has never been so easy to have fresh products devlivered to your
          doorstep.
          <p style={{ fontWeight: 'bold' }}>Local. Natural. Sustainable.</p>
        </p>
        <img style={{ height: 300 }} src="/magnolia.jpg" alt="Farm" />
        <img style={{ height: 300 }} src="/birch.jpg" alt="Farm" />
        <img style={{ height: 300 }} src="/elm.jpg" alt="Farm" />
        <img style={{ height: 300 }} src="/lake.jpg" alt="Farm" />
      </Layout>
    </div>
  );
}
