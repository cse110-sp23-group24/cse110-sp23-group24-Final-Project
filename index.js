// listen for the DOMContentLoaded event, then call init()
window.addEventListener('DOMContentLoaded', init);
/**
 * when it refreshes it resets local storage
 */
async function init() {
    try {
        // Clear global state
        localStorage.removeItem('FutureNowState');

        // Set clean new states
        localStorage.setItem(
            'FutureNowState',
            JSON.stringify({
                TarotState: {
                    selectedCards: [],
                },
                EightBallState: {},
            })
        );
    } catch (error) {
        console.error('An error occurred while initializing:', error);
    }
}
