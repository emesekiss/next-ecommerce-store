import Layout from '../components/Layout';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { deleteProduct, deleteCart } from '../util/cookies.js';
import { useEffect, useState } from 'react';

export default function Cart(props) {
  const [productCart, setProductCart] = useState(props.productCart);
  const [subTotal, setSubTotal] = useState(null);

  useEffect(() => {
    const sumPrice = productCart.reduce((acc, curr) => {
      const product = props.products.find((currentProduct) => {
        return currentProduct.id === curr.id;
      });

      return acc + product.price * curr.count;
    }, 0);

    setSubTotal(sumPrice);
  }, [productCart]);

  return (
    <div>
      <Layout>
        <Head>
          <title>Cart</title>
        </Head>
        <h2>My Cart</h2>
        <div>
          {productCart.map((item) => {
            const product = props.products.find((currentProduct) => {
              return currentProduct.id === item.id;
            });

            return (
              <div>
                {product.name} <br />
                {item.count}
                <br />
                <img
                  style={{ height: 100 }}
                  src={product.img}
                  alt={product.id}
                />
                <br />
                <p>{product.price * item.count} €</p>
                <button
                  id={product.id}
                  onClick={(e) => {
                    setProductCart(deleteProduct(product.id));
                  }}
                >
                  Delete Item
                </button>
              </div>
            );
          })}
        </div>
        <p> Sub-total: {subTotal} €</p>
        <p>Checkout</p>
        <button
          onClick={(e) => {
            setProductCart(deleteCart());
          }}
        >
          Delete All
        </button>
        <button>Check Out</button>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../util/database');

  const products = await getProducts();

  const allCookies = nextCookies(context);
  const productCart = allCookies.productCart || [];

  return {
    props: {
      productCart: productCart,
      products,
    },
  };
}
