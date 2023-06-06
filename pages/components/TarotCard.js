class TarotCard extends HTMLElement {

  /**
   * Create Shadow DOM
   */
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Call Render
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Call on card-back, card-name, and card-image attributes
   */
  static get observedAttributes() {
    return ["card-back-src", "card-name", "card-img-src"];
  }

  /**
   * 
   * @param {*} attrName 
   * @param {*} oldValue 
   * @param {*} newValue 
   * 
   * If the attribute has changed, then we render
   */  
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    this.render();
  }

  /**
   * It constructs the HTML structure for the custom element's shadow DOM and sets the 
   * innerHTML property of the shadowRoot to update its content. It includes a CSS rule 
   * and creates an image element based on the attribute values. Additionally, it attaches a 
   * click event listener to the card element to handle the card selection behavior, invoking the 
   * chooseCard() method.
   */
  render() {
    const cardBackSrc = this.getAttribute("card-back-src");
    const cardName = this.getAttribute("card-name");
    const cardImgSrc = this.getAttribute("card-img-src");

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          position: relative;

          cursor: pointer;
          width: 100%;
          background-color: transparent;
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
        }

        .flipped {
          transform: rotateY(180deg);
        }

        .card-image {
          width: 100%;
        }

        .card-front {
          transform: rotateY(180deg);
        }

        .card-popup {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(8px);
          background-color: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition-delay: 250ms;
          transition: opacity 0.5s ease-in-out; /* Add transition property */
        }

        @keyframes zoom {
          0% {
            transform: scale(0.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .card-popup img {
          animation: zoom 2s  ;
          width: 50%;
          max-width: 300px;
          z-index: 100;
          position: absolute;
        }
        .card-popup.show {
          opacity: 1; /* Set opacity to 1 when the popup is shown */
        }
      </style>
      <article class="card">
        <div class="card-inner">
          <div class="card-front">
            <img class="card-image" src="${cardImgSrc}" alt="${cardName}">
          </div>
          <div class="card-back">
            <img class="card-image" src="${cardBackSrc}" alt="${cardName}">
          </div>
        </div>
      </article> 
      <div class="card-popup" style="transform: scale(1);">
        <img class="card-image" src="${cardImgSrc}" alt="${cardName}">
      </div>
    `;

    
    const cardElement = this.shadowRoot.querySelector(".card");
    cardElement.addEventListener("click", this.chooseCard.bind(this));

    const cardPopupElement = this.shadowRoot.querySelector(".card-popup");
    cardPopupElement.addEventListener("click", this.closePopup.bind(this));

    // In chooseCard() method, add the 'show' class to the cardPopupElement
  cardPopupElement.classList.add("show");
  }

  /**
   * 
   * @returns In summary, the chooseCard() function updates the global state by adding the selected card 
   * to the selectedCards array and stores the updated state in the browser's localStorage. It also updates 
   * the card image in the custom element's shadow DOM to reflect the selected card's image.
   */
  chooseCard() {
      // reading global state
      let globalState = JSON.parse(localStorage.getItem("FutureNowState"));

      // if there are already 3 cards selected, do nothing
      if (globalState.TarotState.selectedCards.length >= 3) return;
    
      const cardName = this.getAttribute("card-name");
      const cardImg = this.getAttribute("card-img-src");

      const cardFound = (() => {
        for (let i = 0; i < globalState.TarotState.selectedCards.length; i++) {
          const card = globalState.TarotState.selectedCards[i];
          if (card.name === cardName && card.imgSrc === cardImg) {
            return true; 
          }
        }
        return false; 
      })();

      if (!cardFound) {
        globalState.TarotState.selectedCards.push({
          name: cardName,
          imgSrc: cardImg,
        });
      }

      // writing updated global state
      localStorage.setItem("FutureNowState", JSON.stringify(globalState));
      
      // flip the card
      const cardInnerElement = this.shadowRoot.querySelector(".card-inner");
      cardInnerElement.classList.add("flipped");

      // show popup
      setTimeout(() => {
        const cardPopupElement = this.shadowRoot.querySelector(".card-popup");
        cardPopupElement.style.display = "flex";
      }, 800);

      setTimeout(() => {
        const cardPopupElement = this.shadowRoot.querySelector(".card-popup");
        cardPopupElement.style.display = "flex";
        setTimeout(() => {
          cardPopupElement.style.opacity = "1";
        }, 10);
      }, 800);
  }

  closePopup() {
    // const cardPopupElement = this.shadowRoot.querySelector(".card-popup");
    // cardPopupElement.style.display = "none";
    const cardPopupElement = this.shadowRoot.querySelector(".card-popup");
  cardPopupElement.style.opacity = "0";
  setTimeout(() => {
    cardPopupElement.style.display = "none";
  }, 500);
  let globalState = JSON.parse(localStorage.getItem("FutureNowState"));

  // if there are already 3 cards selected, do nothing
  if (globalState.TarotState.selectedCards.length >= 3){
    window.location.assign("../result-page/index.html");
    return;
  }
  }
}

customElements.define("tarot-card", TarotCard);
