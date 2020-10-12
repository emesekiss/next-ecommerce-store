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
      <footer style={{ padding: 30 }}>footer here</footer>
    </>
  );
}
