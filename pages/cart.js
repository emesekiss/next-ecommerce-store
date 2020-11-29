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

  :hover {
    background-color: #428746;
  }
`;

const redButtonStyle = css`
  background-color: #c19897;

  :hover {
    background-color: #874342;
  }
`;

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 25px;
  column-gap: 25px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;
    column-gap: 100px;
  }
`;

const productCardStyles = css`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  border-radius: 4px;
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
              <p>{product.name}</p>
              <img style={{ height: 100 }} src={product.img} alt={product.id} />
              <p>{item.count} item selected</p>
              <p>{product.price * item.count} €</p>
              <button
                data-cy={`button-remove-product-id-${item.id}`}
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
        <button data-cy="button-checkout" css={buttonStyle}>
          CHECK OUT
        </button>
      </Link>
    </Layout>
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
