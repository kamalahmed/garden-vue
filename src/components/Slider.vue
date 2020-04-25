<template>
  <section class="banner-area text-center nav-carousel">
    <div class="homepage-slide-1">
      <carousel :items="itemPerSlide" :navText="[nexttext, prevtext]">
        <SingleSlide v-for="(slide, index) in slides" :key="index" :slide="slide" />
      </carousel>
    </div>
    <!-- end homepage-slides -->
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import SingleSlide  from "@/components/SingleSlide";

export default {
  name: "Slider",
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
    nexttext :{
        type: String,
        default: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>'
    },
    prevtext :{
        type: String,
        default: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>'
    },
  },
  components: { 
      carousel,
      SingleSlide,
      }
};
</script>
