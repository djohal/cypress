import HomePage from '../../pages/home_page';

describe('Menu Bar', () => {
  xit('open menu bar', () => {
    cy.visit('https://github.com');
    cy.get('button[aria-label="Toggle navigation"]').first().click();
    cy.get('.HeaderMenu').should('be.visible');
  });

  xit('search for github repositories', () => {
    cy.get('.header-search-wrapper > .form-control').type('javascript{enter}');
    cy.url().should('include', 'javascript');
  });

  // POM
  it('open menu bar', () => {
    HomePage.visit();
    HomePage.menuNav.toggleButton.click();
    HomePage.menuNav.headerMenu.should('be.visible');
  });

  it('search for github repositories', () => {
    HomePage.menuNav.searchInput.type('javascript{enter}');
    cy.url().should('include', 'javascript');
  });
});
