const { contextBridge } = require('electron')
const fs = require('fs');
const path = require('path');

const getCards = () => {
  const assetDir = path.join(__dirname, 'assets/img/cards');
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



contextBridge.exposeInMainWorld('preloadedCards', {
  details: getCards
})

