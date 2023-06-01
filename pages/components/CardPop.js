// class CardPop extends HTMLElement {
//   /**
//    * Create a shadow DOM for our cards
//    */
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//   }

//   /**
//    * This ensures our custom card element is rendered properly
//    */
//   connectedCallback() {
//     this.render();
//   }

//   /**
//    * This looks at the card-back image, card-name, and card-front image
//    *  elements to look for changes. 
//    */
//   static get observedAttributes() {
//     return ["card-back-src", "card-name", "card-img-src"];
//   }

//   /**
//    * This basically describes how we're going to flip the card. First, we get the card-back, card-name, and img-src
//    * attributes. We set the innerHTML of the shadowroot. Then, we have css to describe how to flip once we click on 
//    * our component. 
//    */
//   render() {
//     const cardBackSrc = this.getAttribute("card-back-src");
//     const cardName = this.getAttribute("card-name");
//     const cardImgSrc = this.getAttribute("card-img-src");

//     this.shadowRoot.innerHTML = `
//     <head>
//       <meta name="viewport" content="width=device-width, initial-scale=1">
//       <style>
//     body {
//       font-family: Arial, Helvetica, sans-serif;
//     }

//     {
//       box-sizing: border-box;
//     }

//     .flip-card {
//       background-color: transparent;
//       width: 300px;
//       height: 300px;
//       perspective: 1000px;
//       padding: 50px;
//       margin: 0 auto;
//     }

//     .flip-card-inner {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       text-align: center;
//       transition: transform 0.6s;
//       transform-style: preserve-3d;
//       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//     }

//     .flip-card.flipped .flip-card-inner {
//       transform: rotateY(180deg) scale(1.5);
//     }

//     .flip-card-front, .flip-card-back {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       -webkit-backface-visibility: hidden;
//       backface-visibility: hidden;
//     }

//     .flip-card-front {
//       background-color: #bbb;
//       color: black;
//     }

//     .flip-card-back {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       transform: rotateY(180deg);
//       height: 100vh;
//     }

//     </style>
//     </head>
//     <body>



//     <div class="flip-card" onclick="this.classList.toggle('flipped')" >
//       <div class="flip-card-inner">
//         <div class="flip-card-front">
//           <img src="${cardImgSrc}" alt="${cardName}" style="width:300px;height:300px;">
//         </div>
//         <div class="flip-card-back">

//           <img src="${cardImgSrc}" alt="${cardName}" max-width=100% max-height=100%>

//         </div>
//       </div>
//     </div>

//     </body>`;}
// }

// customElements.define("tarot-card", TarotCard);
