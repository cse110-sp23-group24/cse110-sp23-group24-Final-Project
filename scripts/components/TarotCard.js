/**Tarot card class should include image filepath and name */

class TarotCard extends HTMLElement {
    constructor() {
        super();

        let shadowElement = this.attachShadow({mode: "open"});

        let articleElement = document.createElement("article");
        articleElement.setAttribute("id", "card");


        let name;

        

        shadowElement.appendChild(articleElement);


    }



    
    set data(data) {
        if (!data) return;

        const article = this.shadowRoot.querySelector("article");

        const imgElement = document.createElement("img");
        imgElement.src = data.imagePath;

        article.appendChild(imgElement);

//<img src="${data.imgSrc}" alt="${data.name} width=200 height=400>
        
    }
}

customElements.define("tarot-card", TarotCard);

