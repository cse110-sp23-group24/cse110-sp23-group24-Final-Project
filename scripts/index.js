const fs = require('fs');
const path = require('path');

window.addEventListener('DOMContentLoaded', init);

function init() {
  const cards = getCards();
}

const getCards = () => {
  const assetDir = path.join(__dirname, '/assets/cards');

  fs.readdir(assetDir, (err, files) => {
      if (err) {
          console.error("Could not list the directory.", err);
          process.exit(1);
      }
  
      const cardData = files.map(file => {
          return {
              name: path.basename(file, path.extname(file)),
              imagePath: path.join(assetDir, file)
          };
      });
  
      console.log(cardData);
  });
}