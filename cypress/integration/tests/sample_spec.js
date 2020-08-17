// <reference types="Cypress" />

describe('Sample block', () => {
  it('Sample test ', () => {
    cy.visit('https://google.com');
    cy.url().should('include', 'test');
  });
});
