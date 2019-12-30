context("is the cloud 19.2 yet?", () => {
  it("check if 192", () => {
    cy.visit("f?p=4550:1");
    cy.url().should("contain", "4550:1:");
    var workSpace = Cypress.env("workspace");
    expect(workSpace).to.be.a("string").and.to.not.be.empty;
    cy.get("#F4550_P1_COMPANY")
      .type(workSpace)
      .should("have.value", workSpace);
    var userName = Cypress.env("username");
    expect(userName).to.be.a("string").and.to.not.be.empty;
    cy.get("#F4550_P1_USERNAME")
      .type(userName)
      .should("have.value", userName);
    var passWord = Cypress.env("password");
    cy.get("#F4550_P1_PASSWORD")
      .type(passWord, { log: false })
      .should("have.value", passWord);
    cy.get("#B232005500580944564").click();
    cy.url().should("contain", "4500:1000:");
    cy.get(".a-Footer-version").should("contain", "19.1.0.00.15");
  });
});
