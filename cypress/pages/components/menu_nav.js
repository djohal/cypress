class MenuNav {
  get toggleButton() {
    return cy.get('button[aria-label="Toggle navigation"]').first();
  }
  get headerMenu() {
    return cy.get('.HeaderMenu');
  }
  get searchInput() {
    return cy.get('.header-search-wrapper > .form-control');
  }
}

export default new MenuNav();
