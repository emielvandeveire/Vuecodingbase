<template>
  <div class="cards-container">
    <div class="card">
      <div class="cards-content">
        <h3>Free</h3>
        <ul>
          <li>You get access to the videos</li>
        </ul>
        <a href="https://silly-noether-0cb70c.netlify.app/#">Start now</a>
      </div>
      <h2>FREE</h2>
      <div class="js-tilt-glare">
        <div class="js-tilt-glare-inner"></div>
      </div>
    </div>
    <div class="card">
      <div class="cards-content">
        <h3>Pro</h3>
        <ul>
          <li>You get access to the videos</li>
          <li>You get access to the code</li>
        </ul>
        <a href="https://silly-noether-0cb70c.netlify.app/#">Read More</a>
      </div>
      <h2>PRO</h2>
      <div class="js-tilt-glare">
        <div class="js-tilt-glare-inner"></div>
      </div>
    </div>
    <div class="card">
      <div class="cards-content">
        <h3>Diamond</h3>
        <ul>
          <li>You get access to the videos</li>
          <li>You get access to the code</li>
          <li>You can publish videos</li>
        </ul>
        <a href="https://silly-noether-0cb70c.netlify.app/#">Read More</a>
      </div>
      <h2>DIAMOND</h2>
      <div class="js-tilt-glare"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.cards-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
}

.cards-container .card {
  position: relative;
  width: 280px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.cards-container .card .cards-content {
  padding: 20px;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}

.cards-container .card:hover .cards-content {
  transform: translateY(0px);
  opacity: 1;
}

.cards-container .card h2 {
  position: absolute;
  font-size: 3em;
  opacity: 1;
  pointer-events: none;
}
.light .cards-container .card h2 {
    text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.cards-container .card:nth-child(1) h2 {
  color: #ff0;
}

.cards-container .card:nth-child(2) h2 {
  color: #f0f;
}

.cards-container .card:nth-child(3) h2 {
  color: #90e9ff;
  text-shadow: 0 0 20px #90e9ff;
}
.light .cards-container .card:nth-child(3) h2 {
    text-shadow: 
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.cards-container .card:hover h2 {
  pointer-events: none;
  transition: 0.2s;
  color: rgba(255, 255, 255, 0.05);
  text-shadow: none !important; 
}

.cards-container .card:not(:hover) h2 {
  pointer-events: none;
  transition: 1s;
}

.cards-container .card .cards-content h3 {
  font-size: 1.8em;
  z-index: 1;
}

.cards-container .card:nth-child(1) .cards-content h3 {
  color: #ff0;
}

.cards-container .card:nth-child(2) .cards-content h3 {
  color: #f0f;
}

.cards-container .card:nth-child(3) .cards-content h3 {
  color: #90e9ff;
}

.cards-container .card .cards-content ul li {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
  list-style-type: none;
}
.light .cards-container .card .cards-content ul li {
    color: black;
}

.cards-container .card .cards-content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  color: #000;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.light .cards-container .card .cards-content a {
    color: white;
}
.light .cards-container .card:nth-child(1) .cards-content a {
    color: black;
}

.cards-container .card:nth-child(1) .cards-content a {
  background: #ff0;
}

.cards-container .card:nth-child(2) .cards-content a {
  background: #f0f;
}

.cards-container .card:nth-child(3) .cards-content a {
  background: #90e9ff;
}
</style>