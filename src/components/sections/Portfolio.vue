<template>
<section class="portfolio-area pt-space5 pb-space3">
    <div class="container">
        <div class="section-heading text-center">
            <h2 class="text-primary font-bold text-4xxl pb-4" v-if="content.title" v-html="content.title"></h2>
            <p class="text-lg text-ternary leading-7" v-if="content.subtitle" v-html="content.subtitle"></p>
        </div><!-- end section-heading -->
        <div class="pt-space3">
            <div class="flex flex-wrap -ml-3 -mr-3">

                <a  class="lg:w-1/3 md:w-1/2 sm:w-full mb-12 px-3 portfolio-item block" v-for="(portfolio, i) in content.portfolios" :key="i" :href="portfolio.link">
                    <div class="portfolio-img">
                        <img :src="portfolio.image" class="w-full" alt="Portfolio image">
                    </div>
                    <div class="portfolio-detail bg-white relative z-10 py-4 px-6">
                        <h3 class="text-primary text-lg font-medium font-bold pb-1" v-if="portfolio.title" v-html="portfolio.title"></h3>
                        <p class="text-ternary text-tiny" v-if="portfolio.subtitle" v-html="portfolio.subtitle"></p>
                    </div>
                </a><!-- end portfolio-item -->
                
            </div>
        </div>
    </div><!-- container -->
</section>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    content: {
      type: Object
    }
  }
};
</script>
