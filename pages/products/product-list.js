import Link from 'next/link';
import { products } from '../../util/database';
import { addProduct } from '../../util/cookies.js';

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => {
          return (
            <div>
              {/* Create a link to /users/:id */}
              <Link href={`/products/${product.id}`}>
                <a>
                  <img
                    style={{ height: 100 }}
                    src={product.img}
                    alt={product.id}
                  />
                  <br />
                  {product.name} <br />
                  {product.price} <br />
                </a>
              </Link>
              <input type="number"></input>
              <br />
              <button
                id={product.id}
                onClick={(e) => {
                  addProduct(product.id);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
