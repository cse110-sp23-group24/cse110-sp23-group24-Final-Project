class TarotCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    static get observedAttributes() {
      return ["card-back-src", "card-name", "card-img-src"];
    }
  
    attributeChangedCallback(attrName, oldValue, newValue) {
      if (oldValue === newValue) {
        return;
      }
      this.render();
    }
  
    /**
     * when it changes, update the info displayed
     */
    render() {
      const cardBackSrc = this.getAttribute("card-back-src");
      const cardName = this.getAttribute("card-name");
      const cardImgSrc = this.getAttribute("card-img-src");
  
      this.shadowRoot.innerHTML = `
        <style>
          .card {
            cursor: pointer;
          }
        </style>
        <article>
          <div class="card">
            <img class="card-image" src="${cardBackSrc}" alt="${cardName}">
          </div>
        </article>
      `;
  
      const cardElement = this.shadowRoot.querySelector(".card");
      cardElement.addEventListener("click", this.chooseCard.bind(this));
    }
  
    chooseCard() {
        // reading global state
        let globalState = JSON.parse(localStorage.getItem("FutureNowState"));

        // if there are already 3 cards selected, do nothing
        if (globalState.TarotState.selectedCards.length >= 3) return;
      
        globalState.TarotState.selectedCards.push({
            name: this.getAttribute("card-name"),
            imgSrc: this.getAttribute("card-img-src"),
        });

        // writing updated global state
        localStorage.setItem("FutureNowState", JSON.stringify(globalState));
        
        // update the card image
        const cardImage = this.shadowRoot.querySelector(".card-image");
        cardImage.src = this.getAttribute("card-img-src");
    }
  }
  
  customElements.define("tarot-card", TarotCard);
  