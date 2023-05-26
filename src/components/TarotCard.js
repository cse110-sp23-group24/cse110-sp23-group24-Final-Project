/**Tarot card class should include image filepath and name */

class TarotCard extends HTMLElement {
    constructor() {
        super();

        let shadowElement = this.attachShadow({mode: "open"});
        let articleElement = document.createElement("article");

        shadowElement.appendChild(articleElement);
    }
        
    set data(data) {
        if (!data) return;

        const article = this.shadowRoot.querySelector("article");
        article.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.name}">
        `;        
    }
}

customElements.define("tarot-card", TarotCard);

