describe("SiePomaga", () => {
  it("adds donation to WOŚP (100zł, pocztowy24)", () => {
    cy.visit("https://www.siepomaga.pl/wosp");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.get("input[value='100']").click();
    cy.get("input[name='payment[signature]']").type("Super Darczyńca");
    cy.contains("button", "Do koszyka darowizn").click();
    cy.contains("div.ui.green.circular.small.label", "1");
    cy.contains("a", "Opłać koszyk darowizn").click();
    cy.contains("div.sc-gUQvok.dYTsPi", "100 zł");
    cy.get("input[name='cart[payer_email]']").type("test@gmail.com");
    cy.contains("button", "Więcej opcji płatności").click();
    cy.get("img[alt='Pocztowy24']").click();
    cy.get("input[id='cart[accept_regulations]']").click({ force: true });
    cy.contains("button", "Przejdź do płatności").click();
  });
});
