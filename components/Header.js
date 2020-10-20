import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProductCart } from '../util/cookies';

export default function Header() {
  const productCart = getProductCart();
  const [itemQuantity, setItemQuantity] = useState(null);
  useEffect(() => {
    setItemQuantity(productCart.length);
  }, [productCart]);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 0,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        background: '#eee',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 1100,
          }}
        >
          <img style={{ height: 100 }} src="/icon.png" alt="logo" />
          <h2 style={{ marginTop: 30, fontSize: 50 }}>Peas Be Mine</h2>
          <Link href="/cart">
            <a>
              <img
                style={{ height: 35, margin: 10 }}
                src="/cart.png"
                alt="shopping cart"
              />
              {itemQuantity}
            </a>
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
