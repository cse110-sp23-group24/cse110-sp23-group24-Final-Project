import '../components/TarotCard.js';
import handleManualRefresh from '../utils/handleRefresh.js';
import { CARD_DATA } from '../constants/card-meanings.js';
/**
 * This file contains our init function for initializing tarot cards. 
 */

handleManualRefresh();

window.addEventListener('DOMContentLoaded', init);
/**
 * This function initializes and populate a card deck or card display 
 * using the CARD_DATA components from card-meanings.js. It checks for the presence of a state in the local 
 * storage, shuffles the cards, and dynamically creates tarot-card elements with specific 
 * attributes to display the shuffled cards in the cardsContainer element.
 */
async function init() {
  try {
    // redirect to home page if no state
    if (localStorage.getItem("FutureNowState") === null) window.location.href = "/";

    // shuffle the cards
    const cardsContainer = document.querySelector('.cards-container');
    const shuffledCardData = shuffleArray(CARD_DATA);
    shuffledCardData.forEach(card => {
      let tarotCardElement = document.createElement('tarot-card');

      // set attributes for each card
      tarotCardElement.setAttribute('card-back-src', '/assets/img/cardBack.png');
      tarotCardElement.setAttribute('card-name', card.name);
      tarotCardElement.setAttribute('card-img-src', `/assets/img/cards/${card["img-src"]}`);

      cardsContainer.appendChild(tarotCardElement);
    });

  
  } catch (error) {
    console.error('An error occurred while getting card details:', error);
  }

  shuffledCardData.forEach(card => {
    let tarotCardElement = document.createElement('tarot-card');
    
    // Add event listener to flip card on click
    tarotCardElement.addEventListener('click', () => {
      tarotCardElement.classList.add('flipped');
    });
  
    // set attributes for each card
    tarotCardElement.setAttribute('card-back-src', '/assets/img/cardBack.png');
    tarotCardElement.setAttribute('card-name', card.name);
    tarotCardElement.setAttribute('card-img-src', `/assets/img/cards/${card["img-src"]}`);
    tarotCardElement.classList.add('tarot-card'); // Add class for CSS styling and animation
  
    cardsContainer.appendChild(tarotCardElement);
  });
  
}

/**
 * Randomly shuffles the cards
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  
