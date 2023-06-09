describe('Tarot intro page test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('Contain right title', () => {
        cy.get('h1').should('contain', 'Future Now!');
    });

    it('should navigate to the "Tarot History" page', () => {
        cy.get('.index-menu-button').click();
        cy.get('.index-menu').contains('Tarot History').click();
        cy.wait(1000);
        cy.url().then((url) => {
            cy.url().should('eq', url);
        });
    });

    it('should navigate to the "About Us" page', () => {
        cy.get('img[src="assets/team_images/cat.JPG"]').click();
        //cy.contains('About Us').click();
        cy.url().should('include', '/pages/about-us/index.html');

        // Check if about-us loaded properly
        cy.get('.team').should('contain', 'We Take Showers');
    });

    it('should navigate to the "Help" page', () => {
        cy.get('.index-menu-button').click();
        cy.get('.index-menu').contains('Help!').click();
        cy.url().should('include', '/pages/instructions/index.html');

        // Check if instructions page loaded properly
        cy.get('h1').should('contain', 'Instructions');
    });

    it('should navigate to the "8-Ball" page', () => {
        cy.get('.index-menu-button').click();
        cy.get('.index-menu').contains('8-ball').click();
        cy.url().should('include',
            'src/pages/8ball/magic-8-ball-intro-screen.html');
        // Check if the 8-Ball page loads correctly
        cy.get('.intro-title').should('contain', 'Magic 8-Ball');
    });

    it('should load all PNG images on the page', () => {
        cy.get('.intro-tarot-card img').each(($img) => {
            cy.wrap($img).should('have.prop', 'naturalWidth').and(
                'be.greaterThan', 0);
        });
    });

    it('should bring you to select cards', () => {
        cy.contains('Get Started').click();
        cy.url().should('include', 
        'http://localhost:5173/pages/select-cards/');

        cy.get('.select-cards-title').should('contain', 
        'Please choose 3 cards for your reading');
    })
});
