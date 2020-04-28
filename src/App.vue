<template>
  <div id="app">
    <Header />
    <Banner :slides="bannerSlider.slides" :itemPerSlide="bannerSlider.itemPerSlide" />
    <Services :slides="serviceSlider.slides" :itemPerSlide="serviceSlider.itemPerSlide" />
    <About :content="AboutSectionData" />
    <WhyChooseUs :content="WhyChooseUsData" />
    <Portfolio :content="PortfolioData" />
    <PricingTable :content="PricingTableData" />
    <Testimonial :content="TestimonialData" />
    <LatestBlog :content="LatestBlogData" />
    <CallToAction :content="CallToActionData" />
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
import PricingTable from "./components/sections/PricingTable.vue";
import Testimonial from "./components/sections/Testimonial.vue";
import LatestBlog from "./components/sections/LatestBlog.vue";
import CallToAction from "./components/sections/CallToAction.vue";

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
  subtitle:
    "To find out more or to take advantage of our professional, competitively <br> priced services contact us today.",
  portfolios: [
    {
      image: require("@/assets/img/garden-portfolio1.jpg"),
      title: "Hedge trimming",
      subtitle: "Vitae auctor eu augue",
      link: "#"
    },
    {
      image: require("@/assets/img/garden-portfolio2.jpg"),
      title: "Mulch install",
      subtitle: "Purus sit amet volutpat",
      link: "#"
    },
    {
      image: require("@/assets/img/garden-portfolio3.jpg"),
      title: "Pressure washing",
      subtitle: "Vitae auctor eu augue",
      link: "#"
    },
    {
      image: require("@/assets/img/garden-portfolio4.jpg"),
      title: "Shrub fertilizing",
      subtitle: "Vitae auctor eu augue",
      link: "#"
    },
    {
      image: require("@/assets/img/garden-portfolio5.jpg"),
      title: "Lawn renovation",
      subtitle: "Vitae auctor eu augue",
      link: "#"
    },
    {
      image: require("@/assets/img/garden-portfolio6.jpg"),
      title: "Debris disposal",
      subtitle: "Vitae auctor eu augue",
      link: "#"
    }
  ]
};
let PricingTableData = {
  title: "Maintenance plans",
  subtitle:
    "Check out the price for getting a professional design plan completed to suit <br> you and your garden.",
  showDurationToggle: true,
  planDuration: ["Monthly", "Yearly"],
  plans: [
    {
      title: "Basic",
      monthlyPrice: "150",
      yearlyPrice: "900",
      currencySymbol: "$",
      icon: require("@/assets/img/plan-icon-1.svg"),
      buttonText: "Get Quote",
      buttonLink: "#",
      isFeatured: false,
      features: [
        "Hedge Trim",
        "Mulch Install",
        "Pressure washing",
        "shrub fertilizing"
      ]
    },
    {
      title: "Delux",
      monthlyPrice: "200",
      yearlyPrice: "1200",
      currencySymbol: "$",
      icon: require("@/assets/img/plan-icon-2.svg"),
      buttonText: "Get Quote",
      buttonLink: "#",
      isFeatured: true,
      features: [
        "Lawn renovation",
        "Debris disposal",
        "Annual fertilization",
        "Pressure washing"
      ]
    },
    {
      title: "Premium",
      monthlyPrice: "250",
      yearlyPrice: "1500",
      currencySymbol: "$",
      icon: require("@/assets/img/plan-icon-3.svg"),
      buttonText: "Get Quote",
      buttonLink: "#",
      isFeatured: false,
      features: [
        "Hedge Trim",
        "Mulch Install",
        "Pressure washing",
        "shrub fertilizing"
      ]
    }
  ]
};
let TestimonialData = {
  image: require("@/assets/img/garden-img8.jpg"),

  testimonials: [
    {
      name: "Sara Grant",
      address: "Kansas City, Missouri",
      content: "Always prompt, polite, fairly priced. Never a hard sell for extras and knowledgable too. Price is hard to approximate as variety of work is diverse.",
    },
    {
      name: "Luke Jacobs",
      address: "Arlington, Washington",
      content: "Great quality plants at fair prices and very helpful staff. I had an issue which was resolved promptly. I do not hesitate to recommend this company.",
    },
    {
      name: "Claire Olson",
      address: "Sky Valley, California",
      content: "The team did a great job with my patio. They cleaned it in a timely manner and cleaned it really well. I was surprised to see the original colour.",
    },
    {
      name: "Phillip Hunt",
      address: "Chicago, Illinois",
      content: "Your team achieved great results in my garden. It was all covered with bushes and weeds, but they managed to clear it up. Will book gardening services again.",
    },
    {
      name: "Phillip Bunt",
      address: "Chapel Hill, North Carolina",
      content: "Coming up to summer, we really wanted somewhere outside where we could entertain guests. Thanks to your gardeners we now have a nice clean patio.",
    },
  ],
  itemPerSlide: 1,
};
let LatestBlogData = {
  title: "Articles you might like",
  subtitle:
    "Explore our blog for insightful articles, personal reflections and ideas that <br />inspire action on the topics you care about.",
  posts: [
    {
      id: 1,
      image: require("@/assets/img/blog-img1.jpg"),
      title: "Seasonal lawn care tips for the perfect yard",
      buttonText: "Read more",
      link: "#"
    },
    {
      id: 2,
      image: require("@/assets/img/blog-img2.jpg"),
      title: "How your garden can boost your home’s value",
      buttonText: "Read more",
      link: "#"
    },
    {
      id: 3,
      image: require("@/assets/img/blog-img3.jpg"),
      title: "How to grow and enjoy microgreens year-round",
      buttonText: "Read more",
      link: "#"
    },
  
  ],
  loadMoreText: 'View All Articles',
  loadMoreLink: '#',
};
let CallToActionData = {
  title: "For a free site visit and quotation, <br>just give us a call.",
  subtitle: "Call us now: (222) 400-630",
  buttonText: 'Purchase Ekko',
  buttonLink: '#',
  contactLink: '#',
  contactLinkText: 'send us a message'
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
      PricingTableData,
      TestimonialData,
      LatestBlogData,
      CallToActionData,
    };
  },
  components: {
    Header,
    Banner,
    Services,
    About,
    WhyChooseUs,
    Portfolio,
    PricingTable,
    Testimonial,
    LatestBlog,
    CallToAction,
  }
};
</script>