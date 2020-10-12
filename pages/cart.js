import Layout from '../components/Layout';
import Head from 'next/head';

export default function Cart() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Cart</title>
        </Head>
        <h2>My Cart</h2>
        <p>Sub-total</p>
        <p>shipping</p>
        <p>Checkout</p>
        <img style={{ width: 150 }} src="/cucumber.jpg" alt="cucumber" />
        <button>Add one more item</button>
        <button>Reduce by one item</button>
        <br />
        <img style={{ width: 150 }} src="/banana.jpg" alt="banana" />
        <button>Add one more item</button>
        <button>Reduce by one item</button>
        <p>At the end</p>
        <button>Delete All</button>
        <button>Check Out</button>
      </Layout>
    </div>
  );
}
