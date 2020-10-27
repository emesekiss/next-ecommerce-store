/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Header from './Header';

const mainStyles = css`
  display: block;
  text-align: center;
  padding: 30px;
  max-width: 1000px;
  margin: auto;
  // background: '#a3b18a',
`;

const footerStyles = css`
  padding: 30px;
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
        <p>Footer here</p>
        <h2>Get in touch</h2>

        <p>E-mail: veggies@fruits.com</p>
        <p>Phone: 00222233333002</p>
        <p>Address: Vegtable City, 10201020 Fruit street 3/1</p>
      </footer>
    </>
  );
}
