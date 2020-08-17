import SearchPage from '../../pages/search_page';

describe('Dropdown menu', () => {
  const dropdownItems = [
    'Best match',
    'Most stars',
    'Fewest stars',
    'Most forks',
    'Fewest forks',
    'Recently updated',
    'Least recently updated',
  ];

  xit('verify text of all items from dropdown list', () => {
    cy.visit('https://github.com/search?q=javascript');
    cy.get('.d-none > .btn').click();
    cy.get('details-menu[aria-label="Sort options"] .select-menu-list a').each(
      ($li) => {
        expect(dropdownItems).to.contain($li.text().trim());
      }
    );
  });

  xit('selects an item from dropdown list', () => {
    cy.get(
      'details-menu[aria-label="Sort options"] .select-menu-list a:nth-child(4)'
    ).click();
    cy.url().should('include', 'forks');
  });
  it('verify text of all items from dropdown list', () => {
    SearchPage.visit();
    SearchPage.sortDropdown.btn.click();
    SearchPage.sortDropdown.list.each(($li) => {
      expect(dropdownItems).to.contain($li.text().trim());
    });
  });

  it('selects an item from dropdown list', () => {
    SearchPage.sortDropdown.listItem.click();
    cy.url().should('include', 'forks');
  });
});
