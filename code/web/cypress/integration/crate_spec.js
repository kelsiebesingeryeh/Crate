describe('Home', () => {
    beforeEach(() => {
        const baseURL = 'http://localhost:3000'
        cy.visit(baseURL)
    })

    it('Should see a navigation bar with menu items', () => {
        cy.get(".jsx-856475002")
    })
})