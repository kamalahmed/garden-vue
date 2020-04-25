<template>
  <div id="app">
    <Header />
    <Banner :slides="bannerSlider.slides" :itemPerSlide="bannerSlider.itemPerSlide" />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";

let bannerSliderSlides = [
  {
    title:
      "We've got lots of advice and inspiration to help you in your backyard.",
    subtitle: "Professional gardening <br />care and services",
    image: "assets/img/garden-img1.jpg", // local image url. change the SingleSlide component background image if live image is used.
    buttontext: "purchase ekko",
    buttonlink: "#"
  },
  {
    title: "We value our clients and offer a professional service.",
    subtitle: "Bringing your garden up to <br />peak condition",
    image: "assets/img/garden-img2.jpg",
    buttontext: "purchase ekko",
    buttonlink: "#"
  }
];

export default {
  name: "App",
  data: function() {
    return {
      bannerSlider: {
        slides: bannerSliderSlides,
        itemPerSlide: 1,
      },
      
    };
  },
  components: {
    Header,
    Banner
  }
};
</script>