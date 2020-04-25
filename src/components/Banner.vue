<template>
  <section class="banner-area text-center nav-carousel">
    <Slider :slides="slides"/>
    <!-- end homepage-slides -->
  </section>
</template>

<script>
import Slider from "@/components/Slider";

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
  
  components: { Slider }
};
</script>
