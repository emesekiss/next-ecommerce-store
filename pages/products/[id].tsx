/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { addProduct } from '../../util/cookies.js';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { ChangeEvent} from 'react';

const cardStyles = css`
  background-color: white;
  margin: 0px 300px;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 18px;
`;

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

type ProductType = {
  id: string
  name: string
  price: number
  img: string
  location: string
}
type ProductsType = ProductType[];

type Props = {
  products: ProductsType;
}



export default function Product(props:Props) {
  const router = useRouter();
  const product: ProductType = props.products;
  const [count, setCount] = useState(1);

  return (
    <Layout>
      <Head>
        <title>Single Product</title>
      </Head>
      <div css={cardStyles}>
        <p>{product.name}</p>
        <img style={{ height: 200 }} src={product.img} alt={product.id} />

        <p> {product.price} € </p>
        <p>Origin : {product.location}</p>

        <input
          type="number"
          value={count}
          min="1"
          max="50"
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setCount(e.currentTarget.value);
          }}
        ></input>
        <br />

        <button
          css={buttonStyle}
          id={product.id}
          onClick={(e) => {
            addProduct(product.id, count * 1);
            router.push(`/products/${product.id}`);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;

  const { getProductById } = await import('../../util/database');

  const products: ProductsType = await getProductById(id);

  const props = {};

  if (products) props.products = products;
  return {
    props: props,
  };
}
