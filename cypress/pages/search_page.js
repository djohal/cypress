import SortDropdown from './components/sort_dropdown';

class SearchPage {
  get sortDropdown() {
    return SortDropdown;
  }

  visit() {
    cy.visit('/search?q=javascript');
  }
}

export default new SearchPage();
