import { addProduct, deleteProduct } from '../cookies.js';
import cookie from 'js-cookie';

afterEach(() => {
  cookie.remove('productCart');
});

test('update count if item already in cookie', () => {
  addProduct(3, 2);
  expect(addProduct(3, 3).length).toBe(1);
});

test('add new item to cookie', () => {
  addProduct(3, 9);
  addProduct(2, 1);
  expect(addProduct(5, 5).length).toBe(3);
});

test('remove item from cookie', () => {
  addProduct(3, 2);
  addProduct(1, 6);
  expect(deleteProduct(3).length).toBe(1);
});
