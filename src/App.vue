<template>
  <div id="app">
    <Header />
    <Banner :slides="bannerSlider.slides" :itemPerSlide="bannerSlider.itemPerSlide" />
    <Services :slides="serviceSlider.slides" :itemPerSlide="serviceSlider.itemPerSlide" />
    <About :content="AboutSectionData" />
    <WhyChooseUs :content="WhyChooseUsData" />
    <Portfolio :content="PortfolioData" />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Header from "./components/sections/Header.vue";
import Banner from "./components/sections/Banner.vue";
import Services from "./components/sections/Services.vue";
import About from "./components/sections/About.vue";
import WhyChooseUs from "./components/sections/WhyChooseUs.vue";
import Portfolio from "./components/sections/Portfolio.vue";

let bannerSliderSlides = [
  {
    title:
      "We've got lots of advice and inspiration to help you in your backyard.",
    subtitle: "Professional gardening <br />care and services",
    image: require("@/assets/img/garden-img1.jpg"),
    buttontext: "purchase ekko",
    buttonlink: "#"
  },
  {
    title: "We value our clients and offer a professional service.",
    subtitle: "Bringing your garden up to <br />peak condition",
    image: require("@/assets/img/garden-img2.jpg"),
    buttontext: "purchase ekko",
    buttonlink: "#"
  }
];

let serviceSliderSlides = [
  {
    title: "Lawn renovation",
    subtitle:
      "Donec enim diam vulputate vitae suscipit tellus mauris a diam maecenas.",
    image: require("@/assets/img/garden-img3.jpg"),
    buttontext: "read more",
    buttonlink: "#"
  },
  {
    title: "Pressure washing",
    subtitle:
      "Donec enim diam vulputate vitae suscipit tellus mauris a diam maecenas.",
    image: require("@/assets/img/garden-img4.jpg"),
    buttontext: "read more",
    buttonlink: "#"
  },
  {
    title: "Regular maintenance",
    subtitle:
      "Feugiat scelerisque varius morbi enim nunc faucibus ac felis donec et odio.",
    image: require("@/assets/img/garden-img5.jpg"),
    buttontext: "read more",
    buttonlink: "#"
  },
  {
    title: "Hedge trimming",
    subtitle:
      "Feugiat scelerisque varius morbi enim nunc faucibus ac felis donec et odio.",
    image: require("@/assets/img/garden-img6.jpg"),
    buttontext: "read more",
    buttonlink: "#"
  }
];

let AboutSectionData = {
  title: "We can transform your outdoor space, whether that be large or small.",
  subtitle:
    "Mattis vulputate enim nulla aliquet porttitor lacus. Dictum varius duis at consectetur. In ornare quam viverra orci.",
  image: require("@/assets/img/gardener-img1.jpg"),

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

let WhyChooseUsData = {
  title: "A choice that makes the difference.",
  subtitle: "Why choose us? <br />Because we’re the best.",
  image: require("@/assets/img/garden-img7.jpg"),
  reasons: [
    {
      number: 1,
      title: "Detailed quotes",
      subtitle:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },

    {
      number: 62,
      title: "Customer focused",
      subtitle:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      number: 3,
      title: "Quality matters",
      subtitle:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
  ]
};

let PortfolioData = {
  title: "Our latest works",
  subtitle: "To find out more or to take advantage of our professional, competitively <br> priced services contact us today.",
  portfolios: [
    {
      image: require("@/assets/img/garden-portfolio1.jpg"),
      title: "Hedge trimming",
      subtitle: "Vitae auctor eu augue",
      link: "#",
    },
    {
      image: require("@/assets/img/garden-portfolio2.jpg"),
      title: "Mulch install",
      subtitle: "Purus sit amet volutpat",
      link: "#",
    },
    {
      image: require("@/assets/img/garden-portfolio3.jpg"),
      title: "Pressure washing",
      subtitle: "Vitae auctor eu augue",
      link: "#",
    },
    {
      image: require("@/assets/img/garden-portfolio4.jpg"),
      title: "Shrub fertilizing",
      subtitle: "Vitae auctor eu augue",
      link: "#",
    },
    {
      image: require("@/assets/img/garden-portfolio5.jpg"),
      title: "Lawn renovation",
      subtitle: "Vitae auctor eu augue",
      link: "#",
    },
    {
      image: require("@/assets/img/garden-portfolio6.jpg"),
      title: "Debris disposal",
      subtitle: "Vitae auctor eu augue",
      link: "#",
    },
  ]
}

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
      AboutSectionData,
      WhyChooseUsData,
      PortfolioData,
    };
  },
  components: {
    Header,
    Banner,
    Services,
    About,
    WhyChooseUs,
    Portfolio,
  }
};
</script>