describe('Example Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('Contain right title', () => {
        cy.get('h1').should('contain', 'Future Now!')
    })
})
