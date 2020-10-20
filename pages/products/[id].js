import Head from 'next/head';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { addProduct } from '../../util/cookies.js';
import { useRouter } from 'next/router';
// import { products } from '../../util/database';

export default function Product(props) {
  const router = useRouter();
  console.log('na', props);
  const product = props.products;

  // const product = props.products.find((currentProduct) => {
  //   return currentProduct.id === props.products.id;
  // });
  const [count, setCount] = useState(1);

  return (
    <Layout>
      <Head>
        <title>Single Product</title>
      </Head>
      {product.name} <br />
      <img style={{ height: 100 }} src={product.img} alt={product.id} />
      <br />
      {product.price} €<br />
      Origin : {product.location} <br />
      <input
        type="number"
        value={count}
        min="1"
        max="50"
        onChange={(e) => {
          setCount(e.currentTarget.value);
        }}
      ></input>
      <br />
      <button
        id={product.id}
        onClick={(e) => {
          addProduct(product.id, count * 1);
          router.push(`/products/${product.id}`);
        }}
      >
        Add to Cart
      </button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const { getProductById } = await import('../../util/database');

  const products = await getProductById(id);

  const props = {};
  if (products) props.products = products;
  return {
    props: props,
  };
}

// export async function getServerSideProps(context) {
//   const id = context.query.id;

//   const { getProductById } = await import('../../database');

//   const product = await getProductById(id);
//   console.log('products', product);

//   const props = {};
//   if (product) props.product = product;
//   return {
//     props: props,
//   };
// }
