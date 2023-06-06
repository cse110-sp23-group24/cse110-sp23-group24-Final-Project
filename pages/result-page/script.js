import { CARD_DATA } from '../constants/card-meanings.js';

window.addEventListener('DOMContentLoaded', init);

/**
 * This function initializes and populates a card deck or card display
 * using the CARD_DATA components from card-meanings.js.
 * It checks for the presence of a state in the local storage, shuffles the cards,
 * and dynamically creates tarot-card elements with specific attributes
 * to display the shuffled cards in the cardsContainer element.
 */
function init() {
  try {
    // Redirect to home page if no state
    if (localStorage.getItem('FutureNowState') === null) {
      window.location.href = '/';
      return;
    }

    const cardsContainer = document.querySelector('.cards-container');
    const shuffledCardData = shuffleArray(CARD_DATA);

    for (let i = 0; i < shuffledCardData.length; i++) {
      const card = shuffledCardData[i];
      const tarotCardElement = createTarotCardElement(card);

      cardsContainer.appendChild(tarotCardElement);
    }
  } catch (error) {
    console.error('An error occurred while getting card details:', error);
  }
}

/**
 * Creates a tarot-card element with the specified attributes.
 */
function createTarotCardElement(card) {
  const tarotCardElement = document.createElement('div');
  tarotCardElement.className = 'tarot-card';

  const cardFrontElement = document.createElement('div');
  cardFrontElement.className = 'card-front';

  const cardBackElement = document.createElement('div');
  cardBackElement.className = 'card-back';

  const cardImgElement = document.createElement('img');
  cardImgElement.className = 'card-img';
  cardImgElement.src = `/assets/img/cards/${card['img-src']}`;

  cardFrontElement.appendChild(cardImgElement);
  tarotCardElement.appendChild(cardFrontElement);
  tarotCardElement.appendChild(cardBackElement);

  // Add event listener to flip card on click
  tarotCardElement.addEventListener('click', () => {
    tarotCardElement.classList.add('flipped');
  });

  return tarotCardElement;
}

/**
 * Randomly shuffles the cards using the Fisher-Yates algorithm.
 */
function shuffleArray(array) {
  const newArray = array.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
