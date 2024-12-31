/// <reference types ="cypress" />

describe("alerts", () => {
  it("alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Alert").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.equal("I am a JS Alert");
      return true;
    });
  });

  it("alerts-confirm", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", (alert) => {
      return true;
    });
  });

  it("alert-prompt", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((promt) => {
      cy.stub(promt, "prompt").returns("devaraju");
      cy.contains("Click for JS Prompt").click();
    });
  });

  it.only("alert-prompt-cancle", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((dev) => {
      cy.stub(dev, "prompt").callsFake(() => null);
      cy.contains("Click for JS Prompt").click();
    });
  });
});
