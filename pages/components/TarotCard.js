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
  