class SortDropdown {
  get btn() {
    return cy.get('.d-none > .btn');
  }
  get list() {
    return cy.get(
      'details-menu[aria-label="Sort options"] .select-menu-list a'
    );
  }
  get listItem() {
    return cy.get(
      'details-menu[aria-label="Sort options"] .select-menu-list a:nth-child(4)'
    );
  }
}

export default new SortDropdown();
