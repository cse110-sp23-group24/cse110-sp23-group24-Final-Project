describe('Tarot card pick page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
        cy.contains('Get Started').click();
    });

    it('should display the correct title', () => {
        //cy.visit('http://localhost:5173/pages/select-cards/');
        cy.get('.select-cards-title').should(
            'contain',
            'Please choose 3 cards for your reading'
        );
    });

    it('should have a cards container', () => {
        //cy.visit('http://localhost:5173/pages/select-cards/');
        // Wrap the assertion inside a cy.then() to handle the async behavior
        cy.get('.cards-container').then(($cardsContainer) => {
            expect($cardsContainer).to.exist;
        });
    });

    it('should load the cards', () => {
        //cy.visit('http://localhost:5173/pages/select-cards/');
        // Wrap the action inside a cy.then() to handle the async behavior
        cy.get('.cards-container').then(($cardsContainer) => {
          // Wait for the cards to load by checking if the expected number of cards are present
            cy.get('.cards-container').children().should('have.length', 24);
        });
    });

    // WIP wait for integration of results page 
    it('should not allow selecting more than 3 cards', () => {
        //cy.visit('http://localhost:5173/pages/select-cards/');
      
        // Assert that the length of selected cards in local storage is less than 3
        cy.window().then((win) => {
            const storedCards = JSON.parse(win.localStorage.getItem('FutureNowState')).TarotState.selectedCards;
            expect(storedCards.length).to.be.lessThan(3);
        });
    });

    it('should redirect to the next page after selecting three cards', () => {
        // Visit the select cards page
        //cy.visit('/select-cards-page');
        
        // Simulate card selection (replace the selectors and actions with your own)
        cy.get('tarot-card').eq(0).click(); // Select card 1
        cy.wait(3000);
        cy.get('body').click();
        cy.get('tarot-card').eq(1).click(); // Select card 2
        cy.wait(3000);
        cy.get('body').click();
        cy.get('tarot-card').eq(2).click(); // Select card 3
        cy.wait(3000);
        cy.get('body').click();
        
        // Verify the redirection to the next page
        cy.url().should('include', '/pages/result-page');
        
        cy.get('h1').should('contain', 'Tarot Card Reading');
        cy.get('p.label').each(($p, index) => {
            // Perform assertions based on the index
            if (index === 0) {
              cy.wrap($p).should('contain', 'Past');
            } else if (index === 1) {
              cy.wrap($p).should('contain', 'Present');
            } else if (index === 2) {
              cy.wrap($p).should('contain', 'Future');
            }
        });
      });
});
