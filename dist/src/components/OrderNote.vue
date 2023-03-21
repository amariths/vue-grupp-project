<script></script>

<template>
  <div class="order-container">
    <h2>BESTÄLLNING</h2>
    <ul
      class="order-list"
      v-for="food in $store.state.chosenFood"
      :key="food.id"
    >
      <li class="order-item">{{ food }}</li>
      <!-- Maybe implement later on
        <button class="minus hide"></button>
      -->
    </ul>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiko:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Grape+Nuts&f&display=swap");

.order-container {
  background-color: #d9d9d9;
  color: #1c1c1c;
  width: 28rem;
  height: 31.4rem;
  margin: 1.5rem;
  overflow-y: scroll;
  border-top: 2rem solid #d9d9d9;
  border-bottom: 2rem solid #d9d9d9;
}

.order-container > h2 {
  display: flex;
  justify-content: center;
  font-family: "Amiko", sans-serif;
  font-size: 1.8rem;
  margin: 1vh 0 3vh 0;
}

.order-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-family: "Grape Nuts", cursive;
  font-size: 1.8rem;
  padding: 0;
  margin: 0;
}

.order-item {
  margin: 0 0.8rem;
  padding: 0;
}

/*
Minus button next to food (maybe implement later on)

.order-list:hover .hide {
  display: block;
}

.hide {
  display: none;
}

.minus {
  background-color: #d9d9d9;
  background-image: url(../assets/pics/logos/minus.png);
  background-size: cover;
  height: 1.5rem;
  width: 1.5rem;
  border: 0;
}
*/

@media only screen and (max-width: 446px) {
  .order-container {
    width: 100%;
  }
}
</style>
