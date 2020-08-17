import MenuNav from './components/menu_nav';

class HomePage {
  get loginInput() {
    return cy.get('#user\\[login\\]');
  }
  get emailInput() {
    return cy.get('#user\\[email\\]');
  }
  get passInput() {
    return cy.get('#user\\[password\\]');
  }
  get menuNav() {
    return MenuNav;
  }

  visit() {
    cy.visit('/');
  }
}

export default new HomePage();
