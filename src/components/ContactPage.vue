<script setup>
import FooterPage from "./FooterPage.vue";
</script>

<template>
  <div class="background-image">
    <h1 class="kontakt">KONTAKT</h1>

    <h2 class="contact-text">
      Har du några frågor, funderingar, eller kanske feedback? Tveka inte att
      höra av dig till oss. Skriv ett meddelande här, ring eller kontakta oss på
      våra sociala medier.
    </h2>
    <p class="phone-number">08-123 123 23</p>
    <div class="logo-container">
      <a href="https://www.facebook.com">
        <img
          class="logo"
          src="../assets/pics/logos/facebook.png"
          alt="facebook logo"
      /></a>
      <a href="https://www.instagram.com"
        ><img
          class="logo"
          src="../assets/pics/logos/insta.png"
          alt="instagram logo"
      /></a>
      <a href="https://tiktok.com">
        <img
          class="logo"
          src="../assets/pics/logos/tiktok.png"
          alt="tiktok logo"
      /></a>
    </div>
    <p class="open-text">ÖPPETTIDER</p>
    <p class="day-time1">Mån - Tors: 11:00 - 21:00</p>
    <p class="day-time2">Fre - Sön: 11:00 - 22:00</p>
    <label class="label-text" for="textarea">Meddelande:</label>
    <textarea name="textarea" rows="6" cols="45"></textarea>
    <label class="label-name" for="name">Namn:</label>
    <input type="text" name="name" />
    <button type="submit">SKICKA</button>
    <p class="google-text">HITTA TILL OSS</p>
    <!-- GOOGLEMAPS -->
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=trekantsv%C3%A4gen%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </div>
  <FooterPage />
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiko&display=swap");
/* Background image */
.background-image {
  background-image: url("../assets/pics/contact_page.jpg");
  height: 120vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

h1 {
  position: absolute;
  top: 3.78rem;
  font-family: "Amiko";
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 2.188;
  line-height: 3rem;
  color: #ffffff;
}

.contact-text {
  position: absolute;
  width: 26vw;
  height: 3.625rem;
  left: 15.5vw;
  top: 20vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1rem;
  color: #ffffff;
}
.phone-number {
  position: absolute;
  width: fit-content;
  height: 1.5rem;
  left: 15.5vw;
  top: 35vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  color: #ffffff;
}

.logo-container {
  display: flex;
  width: 100%;
  padding-left: 15vw;
  padding-top: 44vh;
}

img {
  width: 2.125rem;
  height: 2.125rem;
  margin: 0.5em;
}

.open-text {
  position: absolute;
  width: 7.5rem;
  height: 1.5rem;
  left: 33vh;
  top: 56.5vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 1.5rem;
  color: #fff;
}
.day-time1,
.day-time2 {
  position: absolute;
  width: 10rem;
  height: 2.5rem;
  left: 15.55vw;
  top: 60vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #ffffff;
}
.day-time2 {
  top: 63vh;
}
.label-text {
  position: absolute;
  width: 7.313rem;
  height: 1.5rem;
  left: 55vw;
  top: 26.33vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #ffffff;
}
textarea {
  position: absolute;
  width: 25.6rem;
  height: 22vh;
  left: 55vw;
  top: 31vh;
  background: #d9d9d9;
  border-radius: 0.6rem;
}
.label-name {
  position: absolute;
  width: 3.625rem;
  height: 1.5rem;
  left: 55vw;
  top: 55vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #ffffff;
}
input {
  position: absolute;
  width: 21rem;
  height: 1.7rem;
  left: 59.5vw;
  top: 55vh;
  background: #d9d9d9;
  border-radius: 0.25rem;
}
button {
  position: absolute;
  width: 8.125rem;
  height: 3.375rem;
  left: 60vw;
  top: 65vh;
  background: #221109;
  color: #fff;
  border: 2px solid #ad8e6d;
  border-radius: 1.68rem;
}
.google-text {
  position: absolute;
  width: 9rem;
  height: 1.5rem;
  left: 15.55vw;
  top: 73.66vh;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #ffffff;
}
/* GOOGLE MAPS */
.mapouter {
  position: absolute;
  text-align: center;
  height: 7.688rem;
  width: 53.625rem;
  top: 78vh;
  left: 15.55vw;
}
#gmap_canvas {
  width: 66vw;
}

@media screen and (max-width: 600px) {
  .background-image {
    height: 170vh;
  }
  .contact-text {
    width: 30vw;
    left: 27vw;
    width: 12em;
    font-size: 1rem;
    line-height: 1.25rem;
    height: fit-content;
  }
  .phone-number {
    top: 87vw;
    left: 29vw;
  }
  .logo-container {
    padding-top: 55vh;
    padding-left: 29vw;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .open-text {
    top: 62vh;
    left: 17vh;
  }
  .day-time1 {
    top: 66vh;
    left: 17vh;
  }
  .day-time2 {
    top: 69vh;
    left: 17vh;
  }
  .label-text {
    top: 75vh;
    left: 4vh;
    width: 20rem;
  }
  textarea {
    top: 80vh;
    left: 4vh;
    width: 20rem;
  }
  .label-name {
    top: 103vh;
    left: 4vh;
    width: 20rem;
  }
  input {
    top: 106vh;
    left: 4vh;
    width: 20rem;
  }
  button {
    top: 113vh;
    left: 30vw;
  }
  .google-text {
    top: 125vh;
    left: 10vw;
  }
  .mapouter {
    height: 7.68rem;
    width: 8.75rem;
    top: 130vh;
    left: 11.52vw;
  }
  #gmap_canvas {
    width: 77vw;
  }
}
</style>
