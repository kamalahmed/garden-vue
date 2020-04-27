<template>
  <a class="lg:w-1/3 md:w-1/2 sm:w-full mb-12 px-3 portfolio-item block">
    <div class="portfolio-img">
      <img :src="portfolio.image" class="w-full" alt="Portfolio image" />
    </div>
    <div class="portfolio-detail bg-white relative z-10 py-4 px-6">
      <h3
        class="text-primary text-lg font-medium font-bold pb-1"
        v-if="portfolio.title"
        v-html="portfolio.title"
      ></h3>
      <p class="text-ternary text-tiny" v-if="portfolio.subtitle" v-html="portfolio.subtitle"></p>
    </div>
  </a>
  <!-- end portfolio-item -->
</template>

<script>
export default {
  name: "PortfolioSingle",
  props: {
    portfolio: {
      type: Object,
      default: function() {
        return {
          title: "",
          subtitle: "",
          image: "",
          link: ""
        };
      }
    }
  }
};
</script>
