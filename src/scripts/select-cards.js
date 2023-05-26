import '../components/TarotCard.js';
import { cardData } from '../card-meanings.js';
import "../components/TarotCard.js"

window.addEventListener('DOMContentLoaded', init);
const cardsContainer = document.querySelector('#cards-container');

/**
 * Get the card from card-meanings.js because it will be packaged via vite
 */
async function init() {
  try {

    cardData.forEach(card => {
      let tarotCardElement = document.createElement('tarot-card');
      tarotCardElement.data = {
        imgSrc: `/assets/img/cards/${card["img-src"]}`,
        name: card.name
      }

      cardsContainer.appendChild(tarotCardElement);
    });

  
  } catch (error) {
    console.error('An error occurred while getting card details:', error);
  }
}

  
