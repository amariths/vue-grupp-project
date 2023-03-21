<script></script>
<template>
  <div class="food-menu">
    <h2 class="menu-title">Meny</h2>
    <div class="food-category">
      <h4 class="menu-header">Förrätter</h4>
      <p class="menu-item">Löjrom 89kr</p>
      <p class="menu-item">Råbiff 80kr</p>
      <p class="menu-item">Caviar 100kr</p>
    </div>
    <div class="food-category">
      <h4 class="menu-header">Varmrätter</h4>
      <p class="menu-item">Ceasarsallad 275kr</p>
      <p class="menu-item">Skagenröra 260kr</p>
      <p class="menu-item">Kvällens Fisk 300kr</p>
      <p class="menu-item">Oxfilé 350kr</p>
      <p class="menu-item">Råbiff 320kr</p>
      <p class="menu-item">Rotselleri Fiorentina 290kr</p>
    </div>
    <div class="food-category">
      <h4 class="menu-header">Deserter</h4>
      <p class="menu-item">Crème brûlée 80kr</p>
      <p class="menu-item">Hemgjord glass & sorbet 99kr</p>
      <p class="menu-item">Nyfriterade Donuts 85kr</p>
    </div>
    <div class="food-category">
      <h4 class="menu-header">Drycker</h4>
      <p class="menu-item">Irish Coffee 70kr</p>
      <p class="menu-item">Margarita 70kr</p>
      <p class="menu-item">Espresso Martini 75kr</p>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
.food-menu {
  width: 50%;
  height: 100vh;
  position: absolute;
  overflow: scroll;
  top: 0;
  right: 0;
  font-family: "Cutive Mono", monospace;
  background-color: #1c1c1c;
  color: #fff;
}

.menu-title {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.food-category {
  margin-top: 3rem;
}

.menu-header {
  text-align: center;
}

.menu-item {
  text-align: center;
}

@media screen and (max-width: 440px) {
  .food-menu {
    position: relative;
    width: 100%;
  }
}
</style>
