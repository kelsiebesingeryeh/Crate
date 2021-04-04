describe.only('Survey', () => {
    beforeEach(() => {
        const baseURL = "http://localhost:3000";
        cy.visit(`${baseURL}/user/login`);
        cy.get("input[type=email").type("user@crate.com");
        cy.get("input[type=password").type("123456");
        cy.get(".jsx-2258186958").click();
        cy.wait(300)
        cy.visit(`${baseURL}/crates`)
        cy.wait(300)
        cy.get('.jsx-1228826222:first').first().click()
    })

    it('Should see a survey title with text', () => {
        cy.get('.jsx-1368067487').should('contain', 'Style Survey')
        cy.get('p').should('exist')
    })

    it("Should display survey images", () => {
      cy.get(".jsx-511674265").should('have.length', 6);
    });

    it('should be able to select an image', () => {
        cy.get('.jsx-511674265').first().click()
    })

    it("should be able to click the next button to go to the second page", () => {
      cy.get(".jsx-511674265").first().click()
      .get('.jsx-2258186958').click()
    });

    it("Should display a second page of survey images", () => {
        cy.get(".jsx-511674265").first().click()
        .get(".jsx-2258186958").click();
        cy.get(".jsx-511674265").should("have.length", 6);
    });

    it("should be able to select an image on the second page", () => {
        cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click();
      cy.get(".jsx-511674265").first().click()
    });

    it("should be able to click the next button to go to the third page", () => {
         cy.get(".jsx-511674265")
           .first()
           .click()
           .get(".jsx-2258186958")
           .click();
         cy.get(".jsx-511674265").first().click();
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click();
    });

    it("Should display a third page of survey images", () => {
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click();
      cy.get(".jsx-511674265").first().click();
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click();
      cy.get(".jsx-511674265").should("have.length", 6);
    });

    it("should be able to select an image on the third page", () => {
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click();
      cy.get(".jsx-511674265").first().click();
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click();
      cy.get(".jsx-511674265").first().click();
    });

    it("should be able to click the next button to go to the final page", () => {
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-511674265").first().click()
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-511674265").first().click()
      .get(".jsx-2258186958").click()
    });

    it("should display the final results page", () => {
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-511674265").first().click()
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      .get('.jsx-1368067487').should('exist')
    });

    it.only("should route to the subscriptions page when the survey is submitted", () => {
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-511674265").first().click()
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-511674265").first().click().get(".jsx-2258186958").click()
      cy.get(".jsx-2258186958").click()
      cy.wait(300)
      cy.get(".jsx-715511798").should("exist")
    });

})
