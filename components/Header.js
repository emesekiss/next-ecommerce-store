/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProductCart } from '../util/cookies';

const headerStyles = css`
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  a,
  h1 {
    cursor: pointer;
  }
`;
const cartStyles = css`
  position: absolute;
  right: 5%;
  top: 15%;
  cursor: pointer;
  img {
    height: 40px;
    padding-right: 10px;
  }
  img:hover {
    height: 45px;
  }
`;

const titleStyles = css`
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  line-height: 61px;
  color: #874342;
  margin: 0;
  cursor: default;
`;

const navStyles = css`
  color: #1f6123;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.15px;
  display: flex;
  justify-content: flex-start;
  text-shadow: 1px 1px 1px white;
  margin: 0 0 0 5%;
  a {
    padding: 5px 25px 5px 0px;
  }
  a:hover {
    text-shadow: 5px 5px 5px white;
    font-size: 22px;
  }
`;

export default function Header() {
  const productCart = getProductCart();
  const [itemQuantity, setItemQuantity] = useState(null);
  useEffect(() => {
    setItemQuantity(productCart.length);
  }, [productCart]);

  return (
    <header css={headerStyles}>
      <div>
        <Link href="/shop">
          <a>
            <img style={{ height: 120 }} src="/icon.png" alt="logo" />
            <h1 css={titleStyles}>Peas Be Mine</h1>
          </a>
        </Link>
        <Link href="/cart">
          <a css={cartStyles}>
            <img
              data-cy="header-link-cart"
              src="/shopping-cart.png"
              alt="shopping cart"
            />
            {itemQuantity}
          </a>
        </Link>
      </div>
      <div css={navStyles}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/shop">
          <a>SHOP</a>
        </Link>
        <Link href="/about-us">
          <a>ABOUT US</a>
        </Link>
      </div>
    </header>
  );
}
