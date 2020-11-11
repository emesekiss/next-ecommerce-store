describe('CheckoutFlow', () => {
  it('adds items to cart, inserts payment info, checks out', () => {
    cy.visit('/');
    cy.get('[data-cy=product-id-5] > img').click();
    cy.location('pathname').should('match', /\/products\/5$/);
    cy.get('[data-cy=button-add-product-id-5]').click();
    cy.get('[data-cy=header-link-cart]').click();
    cy.get('[data-cy=button-checkout]').click();
    cy.get('[data-cy=input-name]').type('Emese');
    cy.get('[data-cy=input-street]').type('Fruit Street 123');
    cy.get('[data-cy=input-zip-code]').type('3478');
    cy.get('[data-cy=input-name-oncard]').type('Emese');
    cy.get('[data-cy=input-creditcard-number]').type('123456789');
    cy.get('[data-cy=input-ccv]').type('123');
    cy.get('[data-cy=place-order]').click();
    cy.location('pathname').should('match', /\/checkout\/thanks$/);
  });
});
