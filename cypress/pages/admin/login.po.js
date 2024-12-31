class LoginPage {
  logoImg() {
    return 'img[alt="company-branding"]';
  }
  usernameInput() {
    return 'input[name="username"]';
  }

  psswordInput() {
    return 'input[name="password"]';
  }
  submitBtn() {
    return 'button[type="submit"]';
  }
  errorMessage() {
    return 'p[class="oxd-text oxd-text--p oxd-alert-content-text"]';
  }
  dashbord() {
    return 'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]';
  }
  login(username, password) {
    cy.get(this.usernameInput()).type(username);
    cy.get(this.psswordInput()).type(password);
    cy.get(this.submitInput()).click();
  }
  
}

const loginPage = new LoginPage();
export default loginPage;
