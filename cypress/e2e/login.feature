Feature: login functionality verification

    login functionality

    Scenario: verify login with valid username and password
        Given launch the url
        When user enter username "Admin" and password "admin123"
        And click the login button
        Then user should be navigated to dashbord page

    Scenario: verify login with valid username and invalid password
        Given launch the url
        When user enter username "Admin" and password "htfrhh"
        And click the login button
        Then user should get login error

    Scenario: verify login with invalid username and invalid password
        Given launch the url
        When user enter username "gjwrgnw" and password "admin123"
        And click the login button
        Then user should get login error

    Scenario: verify login with invalid username and invalid password
        Given launch the url
        When user enter username "gdygys" and password "htfrhh"
        And click the login button
        Then user should get login error