import Layout from '../components/Layout';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Thank You</title>
        </Head>

        <h2>Thank You</h2>

        <h4>We want to thank you for supporting our small business.</h4>
        <br />
        <p>
          We hope you enjoy your shopping, and if you have any questions, please
          don’t hesitate to reach out. We love hearing from our
          customers—whether you loved your our service or have ideas for how we
          can make the experience even better.
          <br />
          <br />
          Best Wishes, Peas Be Mine Team
          <p style={{ fontWeight: 'bold' }}>Local. Natural. Sustainable.</p>
        </p>
        <img style={{ height: 300 }} src="/thankyou.jpg" alt="Farm" />
      </Layout>
    </div>
  );
}
