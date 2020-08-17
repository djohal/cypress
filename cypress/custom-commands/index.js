import HomePage from '../pages/home_page';

Cypress.Commands.add('signup', (username, email, pass) => {
  HomePage.loginInput.type(username);
  HomePage.emailInput.type(email);
  HomePage.passInput.type(pass);

  // click sign up button
});
