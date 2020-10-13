import cookie from 'js-cookie';

export function getProductCart() {
  const productCart = cookie.getJSON('productCart') || [];

  return productCart;
}

export function addProduct(id) {
  const productCart = getProductCart();
  const newProductCart = [...productCart, { id: id }];

  cookie.set('productCart', newProductCart);
  return newProductCart;
}

export function deleteProduct(id) {
  const cart = getProductCart();
  const newProductCart = cart.filter((item) => item.id !== id);

  cookie.set('productCart', newProductCart);
  return newProductCart;
}
