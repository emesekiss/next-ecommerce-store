/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Header from './Header';

const mainStyles = css`
  display: block;
  text-align: center;
  padding: 15px;
  max-width: 1000px;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;

const footerStyles = css`
  padding: 30px;
  text-align: center;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Peas Be Mine</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      <main css={mainStyles}>{props.children}</main>
      <footer css={footerStyles}>
        <h4>Get in touch</h4>

        <p style={{ fontSize: 14 }}>E-mail: veggies@fruits.com</p>
        <p style={{ fontSize: 14 }}>Phone: 00222233333002</p>
        <p style={{ fontSize: 14 }}>
          Address: Vegetable City, 10201020 Fruit street 3/1
        </p>
        <a href="https://instagram.com/">
          <img
            alt="Instagram"
            src="/instagram.png"
            style={{ width: 30, margin: 10 }}
          />
        </a>
        <a href="https://twitter.com/">
          <img
            alt="Twitter"
            src="/twitter.png"
            style={{ width: 30, margin: 10 }}
          />
        </a>
        <a href="https://facebook.com/">
          <img
            alt="Facebook"
            src="/facebook.png"
            style={{ width: 30, margin: 10 }}
          />
        </a>
      </footer>
    </>
  );
}
