<template>
  <section
    class="choose-area relative z-1 text-white bg-fixed bg-no-repeat bg-cover lg:pt-space12 md:pt-space4 pt-space3 md:pb-space4 pb-space3 text-center"
    :style="{ backgroundImage: 'url(' + content.image + ')' }"
    
  >
    <div class="container">
      <div class="section-heading">
        <h5 class="text-lg pb-5" v-if="content.title" v-html="content.title"></h5>
        <h2 class="font-bold text-4xxl"  v-if="content.subtitle" v-html="content.subtitle"></h2>
      </div>
      <!-- end section-heading -->
      <div class="flex flex-wrap mt-16">
        <div class="info-box mb-8 md:w-1/3 sm:w-full px-3" v-for="(reason, i) in content.reasons" :key="i">
          <div class="info-number" v-if="reason.number">
            <div class="info-number-overlay"></div>
            <span class="text-base font-semibold mx-auto">{{reason.number}}</span>
          </div>
          <div class="info-detail pt-12">
            <h3
              class="text-xl font-medium font-bold pb-5"
              v-if="reason.title"
              v-html="reason.title"
            ></h3>
            <p class="text-tiny leading-7" v-if="reason.subtitle" v-html="reason.subtitle"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
</template>

<script>
export default {
  name: "WhyChooseUs",
  props: {
    content: {
      type: Object
    }
  }
};
</script>
