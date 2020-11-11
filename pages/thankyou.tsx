/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Head from 'next/head';

const imageStyles = css`
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 768px) {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 300px;
  }
`;

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
        <img css={imageStyles} src="/thankyou.jpg" alt="Farm" />
      </Layout>
    </div>
  );
}
