import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Peas Be Mine</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      <main
        style={{
          display: 'block',
          textAlign: 'center',
          padding: 30,
          background: '#a3b18a',
        }}
      >
        {props.children}
      </main>
      <footer style={{ padding: 30 }}>
        <p>Footer here</p>
        <h2>Get in touch</h2>

        <p>E-mail: veggies@fruits.com</p>
        <p>Phone: 00222233333002</p>
        <p>Address: Vegtable City, 10201020 Fruit street 3/1</p>
      </footer>
    </>
  );
}
