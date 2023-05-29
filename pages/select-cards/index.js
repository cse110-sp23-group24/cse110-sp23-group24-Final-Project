import '../components/TarotCard.js';
import { CARD_DATA } from '../constants/card-meanings.js';
/**
 * This file contains our init function for initializing cards and calling TarotCard.js, which detects when a card
 * has been pushed so it flips over from back to front. 
 */
const cardsContainer = document.querySelector('#cards-container');

window.addEventListener('DOMContentLoaded', init);

/**
 * This function gets an array of card data from card-meanings.js and initializes cards for each one. We set the
 * attribute and add it to our container. 
 * If it fails, output an error. 
 */
async function init() {
  try {
    // redirect to home page if no state
    if (localStorage.getItem("FutureNowState") === null) window.location.href = "/";

    // shuffle the cards
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
}

/**
 * randomly generate the cards
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  
