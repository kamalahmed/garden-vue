<template>
  <section class="banner-area text-center nav-carousel">
    <BannerSlider :slides="slides"/>
    <!-- end homepage-slides -->
  </section>
</template>

<script>
import BannerSlider from "@/components/BannerSlider";

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
  
  components: { BannerSlider }
};
</script>
