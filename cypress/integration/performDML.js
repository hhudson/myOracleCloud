context("perform some DML", () => {
  it("perform DML", () => {
    var loginURL = "f?p=105:LOGIN_DESKTOP";
    cy.visit(loginURL);
    cy.url().should("contain", loginURL);
    var userName = Cypress.env("username");
    expect(userName).to.be.a("string").and.to.not.be.empty;
    cy.get("#P101_USERNAME")
      .type(userName)
      .should("have.value", userName);
    var passWord = Cypress.env("password");
    cy.get("#P101_PASSWORD")
      .type(passWord, { log: false })
      .should("have.value", passWord);
    cy.get("#P101_LOGIN").click();
    cy.url().should("contain", "105:1:");
    cy.get("#t_TreeNav_1 > .a-TreeView-content > .a-TreeView-label").click();
    cy.url().should("contain", "105:2:");
    cy.get("#B7373739323769484436").click();
    cy.handleModal();
    cy.getIframeDom()
      .find("#P7_CUST_FIRST_NAME")
      .type("Hayden");
    cy.getIframeDom()
      .find("#P7_CUST_LAST_NAME")
      .type("Hudson");
    cy.getIframeDom()
      .find("#P7_CUST_POSTAL_CODE")
      .type("02139");
    cy.getIframeDom()
      .find("#P7_CREDIT_LIMIT")
      .type("1000");
    cy.getIframeDom()
      .find("#P7_CUST_STATE")
      .select("Massachusetts");
    cy.getIframeDom()
      .find("#B7517917215212734186")
      .click();
    cy.contains("td", "Hayden");
  });
});
