<script setup>
import FoodMenu from "../components/FoodMenu.vue";
</script>

<template>
  <!-- Left side of screen -->
  <div class="landing-page">
    <h1 class="landing-title">Lorem Ipsum</h1>
    <button class="landing-btn">
      <RouterLink class="landing-link" to="/booking">Boka Bord</RouterLink>
    </button>
    <p class="landing-text">
      En kort beskrivning av konceptet. Att bordet bokas, maten bokas och allt
      är redo när kunden väl är framme bla bla bla och mer bla
    </p>
  </div>
  <!-- Right side of screen -->
  <FoodMenu />
</template>

<style scoped>
/* Fonts imports from google fonts */
@import url("https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amiko&display=swap");

.landing-page {
  background-image: url("../assets/pics/landing_page.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 100vh;
}

.landing-title {
  position: relative;
  width: 18vw;
  height: 8vh;
  left: 15vw;
  top: 3vh;
  font-family: "Mrs Sheppards";
  font-style: normal;
  font-weight: 400;
  font-size: 7.5rem;
  line-height: 9.3rem;
  text-align: center;
  color: #fff;
  text-shadow: -8px 7px 4px #000000;
}

.landing-btn {
  position: relative;
  width: 15rem;
  height: 7vh;
  left: 17vw;
  top: 48vh;
  color: #fff;
  background-color: #000;
  border: 2px solid #ad8e6d;
  border-radius: 1.875rem;
}

.landing-link {
  text-decoration: none;
  color: #fff;
}

.landing-text {
  position: relative;
  width: 28vw;
  height: 12vh;
  left: 12vw;
  top: 54vh;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-align: center;
  color: #fff;
}

/* For mobile screens */
@media screen and (max-width: 440px) {
  .landing-page {
    width: 100vw;
  }
  .landing-title {
    width: 70vw;
    font-size: 6.5rem;
  }
  .landing-btn {
    top: 40vh;
    left: 22vw;
  }
  .landing-text {
    width: 80vw;
  }
}
</style>
