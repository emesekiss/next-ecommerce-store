/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import { ProductType } from '../util/types';

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
  cursor: pointer;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  :hover {
    width: 102%;
    height: 102%;
  }
`;

type Props = {
  products: ProductsType;
};
type ProductsType = ProductType[];

export default function ProductList(props: Props) {
  return (
    <Layout>
      <Head>
        <title>Shop</title>
      </Head>

      <div css={productStyles}>
        {props.products.map((product: ProductType) => {
          return (
            <Link href={`/products/${product.id}`}>
              <div css={productCardStyles} data-cy={`product-id-${product.id}`}>
                <img
                  style={{ height: 120 }}
                  src={product.img}
                  alt={product.id}
                />
                <p>{product.name} </p>
                <p>{product.price} €</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getProducts } = await import('../util/database');

  const products: ProductsType = await getProducts();

  return {
    props: {
      products,
    },
  };
}
