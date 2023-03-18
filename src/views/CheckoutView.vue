<script setup>
import SeatBookingConfirm from "../components/CheckoutSeatBooking.vue";
import Footer from "../components/FooterPage.vue";
</script>

<template>
  <section id="checkoutPage">
    <div class="main__content">
      <h1 class="main__content--title">kassa</h1>
      <SeatBookingConfirm />
    </div>
  </section>
  <Footer />
</template>
<style>
#checkoutPage {
  width: 100vw;
  overflow: hidden;
  background-image: url(../assets/pics/checkout_page.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
}
.main__content {
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.main__content--title {
  margin-bottom: 48px;
  margin-top: 62px;
  font-family: "Amiko";
  font-style: normal;
  font-size: 35px;
  text-transform: uppercase;
  color: white;
}
</style>
