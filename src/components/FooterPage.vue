<template>
  <div class="footer-container">
    <div id="item1"><p>© 2023 GRUPP 5</p></div>
    <div id="item2">
      <img
        class="logo"
        src="../assets/pics/logos/facebook.png"
        alt="facebook logo"
      />
      <img
        class="logo"
        src="../assets/pics/logos/insta.png"
        alt="instagram logo"
      />
      <img
        class="logo"
        src="../assets/pics/logos/tiktok.png"
        alt="tiktok logo"
      />
    </div>
  </div>
</template>
<style scoped>
.footer-container {
  display: flex;
  width: 100%;
  background: #000;
}
#item1 {
  padding-top: 1rem;
  padding-left: 2rem;
  color: #fff;
}
#item2 {
  padding-top: 0.5rem;
  padding-right: 2rem;
  margin: 0 0 0 auto;
}
.logo {
  margin: 0.65rem;
  width: 1.4rem;
  height: 1.4rem;
  left: 70rem;
  top: 74rem;
}
</style>
