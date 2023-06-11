document.addEventListener('DOMContentLoaded', function () {
    console.log(localStorage.getItem('language'));
    if (localStorage.getItem('language') == 'Español') {
        console.log("penis");
        let linkElement = document.getElementById('go-back-button');
        console.log(linkElement);
        linkElement.textContent = "Regresar";
        linkElement = document.querySelector('h1');
        linkElement.textContent = "Lectura de Cartas del Tarot"
    }
    let globalState = JSON.parse(
        localStorage.getItem('FutureNowState')
    );
    let selectedCards = globalState.TarotState.selectedCards;
    let labels = ['Past', 'Present', 'Future'];
    if (localStorage.getItem('language') == 'Español') {
        labels = ['Pasado', 'Presente', 'Futuro'];
    }
    selectedCards.forEach(function (card, index) {
        let cardName = card.name;
        cardName = cardName.replace(/-/g, ' ');
        const words = cardName.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (i == 0) {
                words[i] =
                    words[i][0].toUpperCase() + words[i].substr(1);
                continue;
            }
            if (words[i] != 'of' || words[i] != 'the') {
                words[i] =
                    words[i][0].toUpperCase() + words[i].substr(1);
            }
        }
        let cardMeaning;
        let cardImg;
        cardName = words.join(' ');
        cardMeaning = card.meaning;
        cardImg = card.imgSrc;
        let label = labels[index];
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        let nameElement = document.createElement('h3');
        nameElement.textContent = cardName;
        let meaningHolder = document.createElement('div');
        let meaningElement = document.createElement('p');
        meaningElement.textContent = cardMeaning;
        let labelElement = document.createElement('p');
        labelElement.classList.add('label');
        labelElement.style.font =
            "bold 2rem 'Macondo', Courier, monospace";
        labelElement.textContent = label;
        let imageElement = document.createElement('img');
        imageElement.classList.add('card-image');
        imageElement.src = cardImg;

        cardElement.appendChild(labelElement);
        cardElement.appendChild(nameElement);
        cardElement.appendChild(meaningElement);
        cardElement.appendChild(imageElement);

        document
            .getElementById('card-container')
            .appendChild(cardElement);
    });

    // Function to go back to the main page
    function goBack() {
        window.location.href = '../../index.html';
    }

    // Attach event listener to the "Go Back" button
    document
        .getElementById('go-back-button')
        .addEventListener('click', goBack);
});