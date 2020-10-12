import Head from 'next/head';
import Layout from '../../components/Layout';

import { products } from '../../util/database';

export default function Product(props) {
  const product = products.find((currentProduct) => {
    if (currentProduct.id === props.id) {
      return true;
    }

    return false;
  });

  return (
    <Layout>
      <Head>
        <title>Single Product</title>
      </Head>
      <img style={{ height: 100 }} src={product.img} alt={product.id} />
      <br />
      {product.name} <br />
      {product.price} <br />
      Origin : {product.location}
    </Layout>
  );
}

export function getServerSideProps(context) {
  return {
    props: { id: context.query.id },
  };
}
