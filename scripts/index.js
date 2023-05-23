import './components/TarotCard.js';

window.addEventListener('DOMContentLoaded', init);

async function init() {
  try {
    console.log('DOM fully loaded and parsed');
    const allCards = await window.preloadedCards.details();
    const cardBack = allCards.find(card => card.name === 'CardBacks');
    const cards = allCards.filter(card => card.name !== 'CardBacks');
    
  } catch (error) {
    console.error('An error occurred while getting card details:', error);
  }
}

  
