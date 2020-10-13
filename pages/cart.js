import Layout from '../components/Layout';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { products } from '../util/database';
import { deleteProduct } from '../util/cookies.js';

export default function Cart(props) {
  console.log(props);
  return (
    <div>
      <Layout>
        <Head>
          <title>Cart</title>
        </Head>
        <h2>My Cart</h2>
        <div>
          {props.productCart.map((item) => {
            const product = products.find((currentProduct) => {
              return currentProduct.id === item.id;
            });
            return (
              <div>
                {product.name} <br />
                <img
                  style={{ height: 100 }}
                  src={product.img}
                  alt={product.id}
                />
                <br />
                <button>Add one more item</button>
                <button
                  id={product.id}
                  onClick={(e) => {
                    deleteProduct(product.id);
                  }}
                >
                  Reduce by one item
                </button>
              </div>
            );
          })}
        </div>
        <p>Sub-total</p>
        <p>shipping</p>
        <p>Checkout</p>
        <button>Delete All</button>
        <button>Check Out</button>
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const productCart = allCookies.productCart || [];

  return {
    props: {
      productCart: productCart,
    },
  };
}
