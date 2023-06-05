describe('Tarot card pick page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/pages/select-cards/');
    });

    it('should display the correct title', () => {
        cy.get('.select-cards-title').should('contain',
            'Please choose 3 cards for your reading'
        );
    });
});
