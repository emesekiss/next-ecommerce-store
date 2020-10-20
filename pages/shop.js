import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function ProductList(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shop</title>
        </Head>
        <h1>Product List</h1>
        <ul>
          {props.products.map((product) => {
            return (
              <div>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <img
                      style={{ height: 100 }}
                      src={product.img}
                      alt={product.id}
                    />
                    <br />
                    {product.name} <br />
                    {product.price} € <br />
                    <button>Read More</button>
                  </a>
                </Link>
              </div>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../util/database');

  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
