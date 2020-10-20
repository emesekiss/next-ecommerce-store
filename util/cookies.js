import cookie from 'js-cookie';

export function getProductCart() {
  const productCart = cookie.getJSON('productCart') || [];

  return productCart;
}

export function addProduct(id, count) {
  const productCart = getProductCart();
  let newProductCart;

  // Check if the current id exists in the cart
  const checkProductCart = productCart.find((item) => item.id === id);
  // console.log("Id exists", checkProductCart);

  // if there is not id like the currently added one, add this to the cart
  if (!checkProductCart) {
    newProductCart = [...productCart, { id: id, count: count }];
    // console.log('add to cart these', newProductCart);

    // else first, do the math and add the pervious count and the current count then
    // show me the new cart with the new numbers
  } else {
    checkProductCart.count += count;
    // console.log('do the math (old count +new count)', newCount);

    // Show only items that have a different ide than the currently added one

    const filteredCart = productCart.filter((item) => item.id !== id);
    // console.log('Not matching ids', filteredCart);

    newProductCart = [...filteredCart, checkProductCart];
    // console.log("new cart with new number", newProductCart)
  }

  cookie.set('productCart', newProductCart);
  return newProductCart;
}

export function deleteProduct(id) {
  const cart = getProductCart();
  const newProductCart = cart.filter((item) => item.id !== id);

  cookie.set('productCart', newProductCart);
  return newProductCart;
}

export function deleteCart(id) {
  const deletedCart = getProductCart();
  const newProductCart = deletedCart.filter((item) => item.id === id);

  cookie.set('productCart', newProductCart);
  return newProductCart;
}
