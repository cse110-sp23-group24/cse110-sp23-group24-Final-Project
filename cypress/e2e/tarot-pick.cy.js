describe('Tarot card pick page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('should display the correct title', () => {
        cy.visit('http://localhost:5173/pages/select-cards/');
        cy.get('.select-cards-title').should(
            'contain',
            'Please choose 3 cards for your reading'
        );
    });

    it('should have a cards container', () => {
        cy.visit('http://localhost:5173/pages/select-cards/');
        // Wrap the assertion inside a cy.then() to handle the async behavior
        cy.get('.cards-container').then(($cardsContainer) => {
            expect($cardsContainer).to.exist;
        });
    });

    it('should load the cards', () => {
        cy.visit('http://localhost:5173/pages/select-cards/');
        // Wrap the action inside a cy.then() to handle the async behavior
        cy.get('.cards-container').then(($cardsContainer) => {
          // Wait for the cards to load by checking if the expected number of cards are present
            cy.get('.tarot-card').should('have.length', 78);
        });
    });

    // WIP wait for integration of results page 
    it('should not allow selecting more than 3 cards', () => {
        cy.visit('http://localhost:5173/pages/select-cards/');
      
        // Assert that the length of selected cards in local storage is less than 3
        cy.window().then((win) => {
            const storedCards = JSON.parse(win.localStorage.getItem('FutureNowState')).TarotState.selectedCards;
            expect(storedCards.length).to.be.lessThan(3);
        });
    });
});
