/// <reference types ="cypress" />

describe("stubbing a get request", () => {
  it("should stubb the gt request and provide the mock data", () => {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=10&offset=0&sortOrder=DESC&sortField=share.createdAtUtc",
      {
        statusCode: 200,
        body: {
          data: [
            {
              id: 46,
              post: {
                id: 44,
              },
              type: "photo",
              liked: false,
              text: "Rung chu\u00f4ng, rung chu\u00f4ng, rung chu\u00f4ng\u2026",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:23",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
              photoIds: [36],
            },
            {
              id: 45,
              post: {
                id: 43,
              },
              type: "text",
              liked: false,
              text: "hiiii\n",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:21",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
            },
            {
              id: 44,
              post: {
                id: 42,
              },
              type: "text",
              liked: false,
              text: "Hello",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:16",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
            },
            {
              id: 43,
              post: {
                id: 41,
              },
              type: "text",
              liked: true,
              text: "Mohan good morning ra happest birthday",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "Deva",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 2022,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:15",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
            },
            {
              id: 42,
              post: {
                id: 40,
              },
              type: "photo",
              liked: false,
              text: "Th\u00e0nh c\u00f4ng b\u1eaft \u0111\u1ea7u t\u1eeb s\u1ef1 ki\u00ean tr\u00ec.",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:08",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
              photoIds: [35],
            },
            {
              id: 41,
              post: {
                id: 39,
              },
              type: "photo",
              liked: false,
              text: "M\u1eb9 \u01a1i, Noel l\u00e0 g\u00ec?",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:08",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
              photoIds: [34],
            },
            {
              id: 40,
              post: {
                id: 38,
              },
              type: "video",
              liked: true,
              text: "this video final project ",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 1,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:05",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
              video: {
                link: "https://www.youtube.com/embed/AER01beCJ5c",
              },
            },
            {
              id: 39,
              post: {
                id: 37,
              },
              type: "text",
              liked: false,
              text: "Hi",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:05",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
            },
            {
              id: 38,
              post: {
                id: 36,
              },
              type: "photo",
              liked: false,
              text: "M\u1eb9 \u01a1i, Noel l\u00e0 g\u00ec?",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "09:03",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
              photoIds: [33],
            },
            {
              id: 37,
              post: {
                id: 35,
              },
              type: "text",
              liked: false,
              text: "Hello",
              employee: {
                empNumber: 7,
                lastName: "Vo",
                firstName: "John",
                middleName: "Ja",
                employeeId: "12345678",
                terminationId: null,
              },
              stats: {
                numOfLikes: 0,
                numOfComments: 0,
                numOfShares: 0,
              },
              createdDate: "2024-12-26",
              createdTime: "08:46",
              originalPost: null,
              permission: {
                canUpdate: true,
                canDelete: true,
              },
            },
          ],
          meta: {
            total: 37,
          },
          rels: [],
        },
      } ).as("getdata");
    cy.login("Admin", "admin123");
    cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click();
    cy.wait("@getdata");
  });
});
