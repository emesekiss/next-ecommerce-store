/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';

const buttonStyle = css`
  background-color: #92c195;
  cursor: pointer;
  margin: 10px;
  padding: 10px 25px;
  color: #262626;
  border-color: transparent;
  border-radius: 6px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.0125em;
  :hover {
    background-color: #428746;
    color: white;
    cursor: pointer;
  }
`;

const boxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    min-width: 250px;
    padding: 5px;
  }
  label {
    padding: 10px 10px 5px;
  }
  @media screen and (min-width: 768px) {
    input {
      min-width: 300px;
    }
  }
`;

const expStyles = css`
  input {
    min-width: 100px;
  }
  @media screen and (min-width: 768px) {
    input {
      min-width: 120px;
    }
  }
`;
export default function Checkout() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <form action="" method="POST" id="checkout-form">
        <h2>Shipping</h2>
        <div css={boxStyles}>
          <label htmlFor="input-name">
            First and Last Name<span>*</span>
          </label>
          <input
            name="input-name"
            id="input-name"
            data-cy="input-name"
            required
          />

          <label htmlFor="input-email">
            E-mail Address<span>*</span>
          </label>
          <input name="input-email" id="input-email" required />

          <label htmlFor="input-zip-code">
            Postal Code<span>*</span>
          </label>
          <input
            name="input-zip-code"
            id="input-zip-code"
            data-cy="input-zip-code"
            required
          />
          <label htmlFor="input-street">
            Address Line<span>*</span>
          </label>
          <input
            name="input-street"
            id="input-street"
            data-cy="input-street"
            required
          />
          <label htmlFor="input-city">
            City<span>*</span>
          </label>
          <input
            name="input-city"
            id="input-city"
            data-cy="input-city"
            required
          />
        </div>

        <h2>Payment</h2>
        <div css={boxStyles}>
          <label htmlFor="nameOnCard">
            Name on Card<span>*</span>
          </label>
          <input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            data-cy="input-name-oncard"
          />

          <label htmlFor="creditCard">
            Card Number<span>*</span>
          </label>
          <input
            type="text"
            name="creditCard"
            id="creditCard"
            data-cy="input-creditcard-number"
          />

          <label htmlFor="cvv">
            Security Code<span>*</span>
          </label>
          <input type="text" name="cvv" id="cvv" data-cy="input-ccv" />

          <label htmlFor="Expiration">
            Exp. (MM/YYYY)<span>*</span>
          </label>
          <div css={expStyles}>
            <input type="text" name="exp-month" id="exp-month" size="2" />
            <span> / </span>
            <input type="text" name="exp-year" id="exp-year" size="4" />
          </div>
        </div>
      </form>

      <p style={{ fontSize: 24 }}>Total (EUR) {router.query.subTotal} €</p>

      <Link href="../thankyou">
        <a css={buttonStyle} data-cy="place-order">
          PLACE ORDER
        </a>
      </Link>
    </Layout>
  );
}
