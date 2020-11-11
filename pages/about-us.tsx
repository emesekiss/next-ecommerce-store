/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Head from 'next/head';

const imageStyles = css`
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 120px;
  }
  @media screen and (min-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

export default function AboutUs() {
  return (
    <div>
      <Layout>
        <Head>
          <title>About us</title>
        </Head>

        <h2>About us</h2>

        <p>
          Peas be mine is a webshop where sell locally produced organic
          vegetables and fruits from four locations. <br />
          Magnolia Ranch. Birch Wood Farm. Elm Tree Farm. Lake View Farm. <br />
          It has never been so easy to have fresh products delivered to your
          doorstep.
          <p style={{ fontWeight: 'bold' }}>Local. Natural. Sustainable.</p>
        </p>
        <div css={imageStyles}>
          <img src="/magnolia.jpg" alt="Farm" />
          <img src="/birch.jpg" alt="Farm" />
          <img src="/elm.jpg" alt="Farm" />
          <img src="/lake.jpg" alt="Farm" />
        </div>
      </Layout>
    </div>
  );
}
