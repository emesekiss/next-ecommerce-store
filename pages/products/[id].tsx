/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { addProduct } from '../../util/cookies';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { ChangeEvent } from 'react';
import { ProductType } from '../../util/types';

const cardStyles = css`
  background-color: white;
  max-width: 300px;
  margin: auto;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 18px;
  border-radius: 4px;
  img {
    height: 160px;
  }
  input {
    font-size: 1.125rem;
    font-family: 'Josefin Sans';
  }
`;

const buttonStyle = css`
  background-color: #92c195;
  :hover {
    background-color: #428746;
  }
`;

type Props = {
  product: ProductType;
};

export default function Product({ product }: Props) {
  const router = useRouter();

  const [count, setCount] = useState<number>(1);

  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div css={cardStyles}>
        <p>{product.name}</p>
        <img src={product.img} alt={product.id} />

        <p> {product.price} € </p>
        <p>Origin : {product.location}</p>

        <input
          data-cy={`input-product-id-${product.id}`}
          type="number"
          value={count}
          min="1"
          max="50"
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setCount(+e.currentTarget.value);
          }}
        ></input>
        <br />

        <button
          data-cy={`button-add-product-id-${product.id}`}
          css={buttonStyle}
          id={product.id}
          onClick={(e) => {
            addProduct(product.id, count * 1);
            router.push('/shop');
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

  const product: ProductType = await getProductById(id);

  return {
    props: {
      product,
    },
  };
}
