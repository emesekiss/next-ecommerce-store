describe('ShoppingFlow', () => {
  it('Add items to cart, update count, delete from cart', () => {
    cy.visit('/');
    cy.get('[data-cy=product-id-5] > img').click();
    cy.location('pathname').should('match', /\/products\/5$/);
    cy.get('[data-cy=button-add-product-id-5]').click();
    cy.visit('http://localhost:3000/shop');
    cy.get('[data-cy=product-id-5] > img').click();
    cy.get('[data-cy=input-product-id-5]').type('7');
    cy.get('[data-cy=button-add-product-id-5]').click();
    cy.visit('http://localhost:3000/shop');
    cy.get('[data-cy=product-id-8] > img').click();
    cy.location('pathname').should('match', /\/products\/8$/);
    cy.get('[data-cy=button-add-product-id-8]').click();
    cy.get('[data-cy=header-link-cart]').click();
    cy.location('pathname').should('match', /\/cart$/);
    cy.get('[data-cy=button-remove-product-id-8]').click();
  });
});
