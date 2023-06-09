Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error or perform any custom handling
    console.error('Uncaught Exception:', err.message);
    // Return `false` to prevent Cypress from failing the test
    return false;
});
