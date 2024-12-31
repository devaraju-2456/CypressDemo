class AddEmployeePage {
  pimMenu() {
    return 'a[href="/web/index.php/pim/viewPimModule"]';
  }

  addEmployee() {
    return "Add Employee";
  }

  firstNameInput() {
    return 'input[class="oxd-input oxd-input--active orangehrm-firstname"]';
  }

  lastNameInput() {
    return 'input[class="oxd-input oxd-input--active orangehrm-lastname"]';
  }

  submitBtn() {
    return 'Button[type="submit"]';
  }

  successMesagee() {
    return "Successfully Saved";
  }
}

const addEmployeePage = new AddEmployeePage();

export default addEmployeePage;
