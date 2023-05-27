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

  /**
   * flip card while zoom in
   */
  render() {
    const cardBackSrc = this.getAttribute("card-back-src");
    const cardName = this.getAttribute("card-name");
    const cardImgSrc = this.getAttribute("card-img-src");

    this.shadowRoot.innerHTML = `
    <head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

{
box-sizing: border-box;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  padding: 50px;
  margin: 0 auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg) scale(1.5);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  height: 100vh;
}

</style>
</head>
<body>



<div class="flip-card" onclick="this.classList.toggle('flipped')" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://img.itch.zone/aW1hZ2UvNzM4NzMyLzQxMTI4ODkuanBn/794x1000/AKiFKm.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">

      <img src="https://img.itch.zone/aW1hZ2UvNzM4NzMyLzQxMTI4ODYuanBn/794x1000/NTpJ1b.jpg" alt="Girl in a jacket" max-width=100% max-height=100%>

    </div>
  </div>
</div>

</body>
    `;
    // <style>
    //   <div class="flip-card">
    //       <div class="flip-card-inner">
    //           <div class="flip-card-front">
    //               <img class="card-image" src="${cardBackSrc}" alt="${cardName}">
    //           </div>
    //           <div class="flip-card-back">
    //               <img class="card-image" src="${cardImgSrc}" alt="${cardName}"
    //           </div>
    //       </div>
    //   </div>
  }
}

customElements.define("tarot-card", TarotCard);
