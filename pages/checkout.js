/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';

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

export default function Checkout() {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <Head>
          <title>Checkout</title>
        </Head>
        <form action="" method="POST" id="checkout-form">
          <h2>Shipping</h2>

          <select
            name="country"
            id="country"
            placeholder="Choose Country"
            required
          >
            <option value="Austria">Austria</option>
            <option value="Germany">Germany</option>
            <option value="Hungary">Hungary</option>
          </select>
          <input data-cy="input-city" placeholder="City" required />
          <br />
          <input data-cy="input-zip-code" placeholder="Postal Code" required />
          <input data-cy="input-street" placeholder="Address Line" required />
          <br />
          <input data-cy="input-firstname" placeholder="First Name" required />
          <input data-cy="input-lastname" placeholder="Last Name" required />
          <br />
          <input
            data-cy="input-phone-number"
            placeholder="Phone Number"
            required
          />
          <input data-cy="input-e-mail" placeholder="E-mail Address" required />
          <br />

          <h2>Payment</h2>

          <div>
            <label htmlFor="nameOnCard">Name on Card </label>
            <input type="text" name="nameOnCard" id="nameOnCard" />
          </div>
          <div>
            <label htmlFor="creditCard">Card Number </label>
            <input type="text" name="creditCard" id="creditCard" />
          </div>

          <div>
            <label htmlFor="cvv">Security Code </label>
            <input type="text" name="cvv" id="cvv" />
          </div>

          <div>
            <label htmlFor="Expiration">Exp. (MM/YYYY) </label>
            <input type="text" name="exp-month" id="exp-month" size="2" />
            <span> / </span>
            <input type="text" name="exp-year" id="exp-year" size="4" />
          </div>
        </form>
        <br />
        <p style={{ fontSize: 24 }}>Total (EUR) {router.query.subTotal} €</p>
        <Link href="../thankyou">
          <button css={buttonStyle}>
            <a>PLACE ORDER</a>
          </button>
        </Link>
      </Layout>
    </div>
  );
}
