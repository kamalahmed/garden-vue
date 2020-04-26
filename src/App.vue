<template>
  <div id="app">
    <Header />
    <Banner :slides="bannerSlider.slides" :itemPerSlide="bannerSlider.itemPerSlide" />
    <Services :slides="serviceSlider.slides" :itemPerSlide="serviceSlider.itemPerSlide" />
    <About :content="AboutSectionData" />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Header from "./components/sections/Header.vue";
import Banner from "./components/sections/Banner.vue";
import Services from "./components/sections/Services.vue";
import About from "./components/sections/About.vue";

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

let serviceSliderSlides = [
  {
    title: "Lawn renovation",
    subtitle:
      "Donec enim diam vulputate vitae suscipit tellus mauris a diam maecenas.",
    image: "assets/img/garden-img3.jpg", // local image url. change the SingleSlide component background image if live image is used.
    buttontext: "read more",
    buttonlink: "#"
  },
  {
    title: "Pressure washing",
    subtitle:
      "Donec enim diam vulputate vitae suscipit tellus mauris a diam maecenas.",
    image: "assets/img/garden-img4.jpg",
    buttontext: "read more",
    buttonlink: "#"
  },
  {
    title: "Regular maintenance",
    subtitle:
      "Feugiat scelerisque varius morbi enim nunc faucibus ac felis donec et odio.",
    image: "assets/img/garden-img5.jpg",
    buttontext: "read more",
    buttonlink: "#"
  },
  {
    title: "Hedge trimming",
    subtitle:
      "Feugiat scelerisque varius morbi enim nunc faucibus ac felis donec et odio.",
    image: "assets/img/garden-img6.jpg",
    buttontext: "read more",
    buttonlink: "#"
  }
];

let AboutSectionData = {
  title: "We can transform your outdoor space, whether that be large or small.",
  subtitle:
    "Mattis vulputate enim nulla aliquet porttitor lacus. Dictum varius duis at consectetur. In ornare quam viverra orci.",
  image: "assets/img/gardener-img1.jpg",
  btntext: "Purchase Ekko",
  btnlink: "#",
  cta: {
    title: "Interested? Request a free quote.",
    subtitle:
      "Amet dictum sit amet justo donec enim diam vulputate.<br/> Vitae suscipit tellus mauris a diam maecenas sed enim ut.",
    btntext: "Get Started",
    btnlink: "#"
  }
};

export default {
  name: "App",
  data: function() {
    return {
      bannerSlider: {
        slides: bannerSliderSlides,
        itemPerSlide: 1
      },
      serviceSlider: {
        slides: serviceSliderSlides,
        itemPerSlide: 3
      },
      AboutSectionData: AboutSectionData
    };
  },
  components: {
    Header,
    Banner,
    Services,
    About
  }
};
</script>