import HomePage from '../../pages/home_page';
import '../../custom-commands';

describe('Sign Up Form', () => {
  xit('Fill sign up form', () => {
    cy.visit('https://github.com');
    cy.get('#user\\[login\\]').type('testusername');
    cy.get('#user\\[email\\]').type('test@mail.ca');
    cy.get('#user\\[password\\]').type('testpassword');
  });

  // POM
  it('Fill sign up form with valid data', () => {
    HomePage.visit();
    cy.signup('testusername', 'test@mail.ca', 'passtest');
  });
  it('Fill sign up form with invalid data', () => {
    HomePage.visit();
    cy.signup('testusername', 'test@mail.ca', 'passtest');
  });
  it('Fill sign up form with no data', () => {
    HomePage.visit();
    cy.signup(' ', ' ', ' '); // type doesn't work with empty strings
  });
});
