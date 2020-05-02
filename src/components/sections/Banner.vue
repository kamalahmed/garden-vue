<template>
  <section class="banner-area text-center nav-carousel text-white -mb-2">
    <Slider :itemPerSlide="content.itemPerSlide" :responsive="content.responsive">
      <BannerSingleSlide v-for="(slide, index) in content.slides" :key="index" :slide="slide" />
    </Slider>
  </section>
</template>

<script>
import Slider from "@/components/common/Slider";
import BannerSingleSlide from "@/components/BannerSingleSlide";

export default {
  name: "Banner",
  props: {
    content: {
      type: Object
    }
  },

  components: { Slider, BannerSingleSlide }
};
</script>
