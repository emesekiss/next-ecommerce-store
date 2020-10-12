import Link from 'next/link';

export default function Header() {
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
            </a>
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <a style={{ padding: '0 10px' }}>Home</a>
          </Link>
          <Link href="/shop">
            <a style={{ padding: '0 10px' }}>Shop</a>
          </Link>
          <Link href="/about-us">
            <a style={{ padding: '0 10px' }}>About Us</a>
          </Link>
          <Link href="/contact">
            <a style={{ padding: '0 10px' }}>Contact</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
