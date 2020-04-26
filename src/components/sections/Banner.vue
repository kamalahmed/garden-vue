<template>
  <section class="banner-area text-center nav-carousel text-white -mb-2">
    <Slider :itemPerSlide="itemPerSlide">
      <BannerSingleSlide v-for="(slide, index) in slides" :key="index" :slide="slide" />

    </Slider>
  </section>
</template>

<script>
import Slider from "@/components/common/Slider";
import BannerSingleSlide  from "@/components/BannerSingleSlide";

export default {
  name: "Banner",
  props: {
      itemPerSlide :{
        type: Number,
        default: 1
    },
    slides: {
      type: Array,
      default: function() {
        return [];
      }
    },

  },
  
  components: {Slider, BannerSingleSlide }
};
</script>
