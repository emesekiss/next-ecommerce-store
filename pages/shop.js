import Layout from '../components/Layout';
import Head from 'next/head';
import ProductList from './products/product-list';

export default function Shop() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shop</title>
        </Head>
        <ProductList />
        <h2>Fruits and Vegtables</h2>
        <img style={{ width: 150 }} src="/cucumber.jpg" alt="cucumber" />
        <img style={{ width: 150 }} src="/onion.jpg" alt="onion" />
        <img style={{ width: 150 }} src="/banana.jpg" alt="banana" />
        <img style={{ width: 150 }} src="/pea.jpg" alt="pea" />
        <img style={{ width: 150 }} src="/tomatoes.jpg" alt="tomatoes" />
        <img style={{ width: 150 }} src="/lemon.jpg" alt="lemon" />
      </Layout>
    </div>
  );
}
