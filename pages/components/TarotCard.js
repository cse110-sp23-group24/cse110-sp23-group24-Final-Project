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
      `;
  
      const cardElement = this.shadowRoot.querySelector(".card");
      cardElement.addEventListener("click", this.chooseCard.bind(this));
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
    }
  }
  
  customElements.define("tarot-card", TarotCard);
  