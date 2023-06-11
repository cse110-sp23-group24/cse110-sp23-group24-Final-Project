import { CARD_DATA } from '../../pages/constants/card-meanings.js';
describe('Tarot card pick and reusult page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
        cy.contains('Get Started').click();
    });

    it('should display the correct title', () => {
        cy.get('.select-cards-title').should(
            'contain',
            'Please choose 3 cards for your reading'
        );
    });

    it('should have a cards container', () => {
        // Wrap the assertion inside a cy.then() to handle the async behavior
        cy.get('.cards-container').then(($cardsContainer) => {
            expect($cardsContainer).to.exist;
        });
    });

    it('should load the cards', () => {
        // Wrap the action inside a cy.then() to handle the async behavior
        cy.get('.cards-container').then(($cardsContainer) => {
            // Wait for the cards to load by checking if the expected number of cards are present
            cy.get('.cards-container').children().should('have.length', 24);
        });
    });

    // WIP wait for integration of results page
    it('should not allow selecting more than 3 cards', () => {
        // Assert that the length of selected cards in local storage is less than 3
        cy.window().then((win) => {
            const storedCards = JSON.parse(
                win.localStorage.getItem('FutureNowState')
            ).TarotState.selectedCards;
            expect(storedCards.length).to.be.lessThan(3);
        });
    });

    it('should redirect to the next page after selecting three cards', () => {
        // Get 3 random unique numbers
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * 24);
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        randomNumbers.forEach((randomNumber) => {
            cy.get('tarot-card').eq(randomNumber).click();
            cy.wait(3500);
            cy.get('body').click();
        });

        // Verify the redirection to the next page
        cy.url().should('include', '/pages/result-page');

        cy.get('h1').should('contain', 'Tarot Card Reading');
    });

    it('should toggle the volume on and off', () => {
        // Click the volume toggle button
        cy.get('#volume-button').click();

        // Assert that the volume is turned off
        cy.get('#volume-button').should('have.text', 'Volume OFF');

        // Click the volume toggle button again
        cy.get('#volume-button').click();

        // Assert that the volume is turned on
        cy.get('#volume-button').should('have.text', 'Volume ON');
    });

    it('result should display past, present and future', () => {
        // Get 3 random unique numbers
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * 24);
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        randomNumbers.forEach((randomNumber) => {
            cy.get('tarot-card').eq(randomNumber).click();
            cy.wait(3500);
            cy.get('body').click();
        });

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

    it('result should go back button should go back to intro', () => {
        // Get 3 random unique numbers
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * 24);
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        randomNumbers.forEach((randomNumber) => {
            cy.get('tarot-card').eq(randomNumber).click();
            cy.wait(3500);
            cy.get('body').click();
        });

        cy.contains('Go Back').click();
        cy.url().should('include', 'http://localhost:5173/');
    });

    it('present, past, future should match', () => {
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * 24);
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        randomNumbers.forEach((randomNumber) => {
            cy.get('tarot-card').eq(randomNumber).click();
            cy.wait(3500);
            cy.get('body').click();
        });

        cy.get('.card').each((cardElement, index) => {
            const labelElement = cardElement.find('.label');
            const cardNameElement = cardElement.find('h3');
            const meaningElement = cardElement.find('p:not(.label)');
            const imageElement = cardElement.find('img');

            const cardName = cardNameElement
                .text()
                .trim()
                .toLowerCase()
                .replace(/ /g, '-');
            const label = labelElement.text().trim();
            const meaning = meaningElement.text().trim();
            const imageSrc = imageElement.attr('src');

            // Find the corresponding card in CARD_DATA

            const cardData = CARD_DATA.find((card) => card.name === cardName);

            // Assert that the card details match
            expect(imageSrc).to.include(
                `/assets/img/cards/${cardData['img-src']}`
            ); // Compare image source

            // Assert that the label matches the corresponding position
            if (index % 3 === 0) {
                expect(label).to.equal('Past');
                expect(cardData.past).to.equal(meaning); // Compare past value
            } else if (index % 3 === 1) {
                expect(label).to.equal('Present');
                expect(cardData.present).to.equal(meaning); // Compare present value
            } else {
                expect(label).to.equal('Future');
                expect(cardData.future).to.equal(meaning); // Compare future value
            }
        });
    });
});
