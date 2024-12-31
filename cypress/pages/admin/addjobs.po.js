class AddJobsPage {
  adminMenu() {
    return 'span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]';
  }

  jobDropdown() {
    return "Job";
  }

  jobTitle() {
    return "Job Titles";
  }

  addButton() {
    return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]';
  }

  jobTitleInput() {
    return 'input[class="oxd-input oxd-input--active"]';
  }

  jobDecriptionInput() {
    return 'textarea[placeholder="Type description here"]';
  }

  saveButton() {
    return "Save";
  }

  successMesagee() {
    return "Successfully Saved";
  }
}

const addJobPage = new AddJobsPage();

export default addJobPage;
