Feature: Verify add Employee functionality
    Background: login
        Given launch the url
        When user enter username "Admin" and password "admin123"
        And click the login button
        When click on PIM
        When click on add employee submenu

    Scenario: Verify add employee with mandotory fields
        And enter employee firstname "<firstname>"
        And enter employee lastname "<lastname>"
        When click the save button
        Then sucess message should be visible
        Examples:
            | firstname | lastname |
            | Gutu      | mand     |
            | Mahesh    | Raju     |
            | Deva      | Raj      |


    Scenario: Verify add employee error messages for mandotory fields
        When click the save button
        Then mandotory fields error message should be visible
