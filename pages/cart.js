/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { deleteProduct, deleteCart } from '../util/cookies.js';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const buttonStyle = css`
  background-color: #92c195;
  color: #262626;
  height: 40px;
  width: 120px;
  border-radius: 6px;
  margin: 10px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  letter-spacing: 0.0125em;

  :hover {
    background-color: #428746;
    color: white;
  }
`;

const redButtonStyle = css`
  background-color: #c19897;
  color: #262626;
  height: 40px;
  width: 120px;
  border-radius: 6px;
  margin: 10px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  letter-spacing: 0.0125em;

  :hover {
    background-color: #874342;
    color: white;
  }
`;

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`;

const productCardStyles = css`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
`;
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
  }, [productCart, props.products]);

  return (
    <div>
      <Layout>
        <Head>
          <title>Cart</title>
        </Head>
        <h2 style={{ fontSize: 24, paddingBottom: 20, color: '#262626' }}>
          My Cart
        </h2>
        <div css={productStyles}>
          {productCart.map((item) => {
            const product = props.products.find((currentProduct) => {
              return currentProduct.id === item.id;
            });

            return (
              <div css={productCardStyles}>
                {product.name} <br />
                <img
                  style={{ height: 100 }}
                  src={product.img}
                  alt={product.id}
                />
                <br />
                {item.count} item selected
                <p>{product.price * item.count} €</p>
                <button
                  css={redButtonStyle}
                  id={product.id}
                  onClick={(e) => {
                    setProductCart(deleteProduct(product.id));
                  }}
                >
                  DELETE ITEM
                </button>
              </div>
            );
          })}
        </div>
        <p style={{ fontSize: 24 }}> Sub-total: {subTotal} €</p>

        <button
          css={redButtonStyle}
          onClick={(e) => {
            setProductCart(deleteCart());
          }}
        >
          DELETE ALL
        </button>
        <Link
          href={{
            pathname: '../checkout',
            query: {
              subTotal,
            },
          }}
          id="checkout"
        >
          <a>
            <button css={buttonStyle}>CHECK OUT</button>
          </a>
        </Link>
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
