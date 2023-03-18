<template>
  <div class="background-img">
    <h1 class="header-text1">Lorem</h1>
    <h1 class="header-text2">ipsum</h1>
    <h2 class="middle-text">TACK FÖR DIN BOKNING/BESTÄLLNING</h2>

    <p class="small-text">
      Kvitto och bokningsbekräftelse skickas till din e-post. <br />Vid frågor
      vänligen Kontakta Oss
    </p>

    <img
      class="facebook-logo"
      src="../assets/pics/logos/facebook.png"
      alt="Facebook-logo"
    />
    <img
      class="instagram-logo"
      src="../assets/pics/logos/insta.png"
      alt="instagram-logo"
    />
    <img
      class="tiktok-logo"
      src="../assets/pics/logos/tiktok.png"
      alt="tiktok-logo"
    />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amiko&display=swap");
.background-img {
  background-image: url(../assets/pics/thanks_page.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
.header-text1 {
  position: absolute;
  left: 35%;
  top: 25%;
  transform: translate(-45%, -75%);

  font-family: "Mrs Sheppards";
  font-style: normal;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 13rem;
  text-align: center;

  color: #ffffff;

  text-shadow: -8px 7px 4px #000000;
}
.header-text2 {
  position: absolute;
  left: 55%;
  top: 30%;
  transform: translate(-40%, -70%);

  font-family: "Mrs Sheppards";
  font-style: normal;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 10rem;
  text-align: center;

  color: #ffffff;

  text-shadow: -8px 7px 4px #000000;
}

.middle-text {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -55%);
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;

  color: white;
}

.small-text {
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -40%);

  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: center;

  color: white;
}
.facebook-logo {
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 45%;
  top: 80%;

  background: url(facebook);
}

.instagram-logo {
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 30%;
  top: 80%;
}

.tiktok-logo {
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 60%;
  top: 80%;
}

@media screen and (min-width: 690px) {
  .header-text1 {
    left: 45%;
    top: 25%;
    transform: translate(-45%, -75%);
    font-size: 5rem;
  }
  .header-text2 {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-40%, -70%);
    font-size: 5rem;
  }
  .facebook-logo {
    left: 45%;
  }

  .instagram-logo {
    left: 40%;
  }

  .tiktok-logo {
    left: 50%;
  }
}

@media screen and (min-width: 1300px) {
  .header-text1 {
    left: 48%;
    font-size: 6rem;
  }
  .header-text2 {
    left: 53%;
    font-size: 6rem;
  }
  .facebook-logo {
    left: 45%;
  }

  .instagram-logo {
    left: 55%;
  }

  .tiktok-logo {
    left: 50%;
  }
}
</style>
