const fs = require('fs');
const path = require('path');

window.addEventListener('DOMContentLoaded', init);

async function init() {
  try {
    const cards = await getCards();
    let card = document.querySelector("tarot-card");
    card.data = cards[0]; // Assuming you want to set the first card
  } catch (err) {
    console.error("Error retrieving card data:", err);
  }
}

const getCards = () => {
  const assetDir = path.join(__dirname, 'assets/cards');

  return new Promise((resolve, reject) => {
    fs.readdir(assetDir, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const cardData = files.map(file => {
        return {
          name: path.basename(file, path.extname(file)),
          imagePath: path.join(assetDir, file)
        };
      });

      resolve(cardData);
    });
  });
};
