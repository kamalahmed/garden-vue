<template>
    <div class="single-slide-item bg-local pt-48 pb-48 relative"
        :style="{ backgroundImage: 'url(' + require('@/'+slide.image) + ')' }" >
        <div class="container">
            <div class="banner-content -mt-6">
                <p class="text-semibase text-white pb-5" v-if="slide.title" v-html="slide.title"></p>
                <h2 class="text-white font-bold text-xlg pb-8" v-if="slide.subtitle" v-html="slide.subtitle"></h2>
                <div class="mt-5">
                <a
                    v-if="slide.buttonlink"
                    :href="slide.buttonlink"
                    class="theme-btn text-sm bg-secondary text-white uppercase font-medium py-5 px-10"
                >
                    <span class="relative z-10" v-if="slide.buttontext">{{slide.buttontext}}</span>
                </a>
                </div>
            </div>
        <!-- end banner-content -->
        </div>
        <!-- container -->
    </div>
</template>

<script>
export default {
  name: "SingleSlide",
  props: {
    slide: {
      type: Object,
      default: function() {
        return {
            title:"",
            subtitle: "",
            image: "",
            buttontext: "",
            buttonlink: ""
          };
      }
    }
  },
};
</script>
