<template>
  <section class="service-area nav-carousel text-center pt-space5">
    <div class="container">
      <SectionHeading>
        <SectionTitle :text="content.title" />
        <SectionSubtitle :text="content.subtitle" />
      </SectionHeading>

      <!-- end section-heading -->
      <div class="mt-10">
        <div class="service-wrap -ml-4 -mr-4">
          <Slider :itemPerSlide="content.itemPerSlide" :responsive="content.responsive">
            <div v-for="(slide, index) in content.slides" :key="index" class="service-item bg-white p-4">
              <a :href="slide.buttonlink" class="block">
                <img :src="slide.image" alt="Garden img" class="rounded" />
              </a>
              <h3
                class="text-primary font-semibold text-xl pt-8 pb-4 text-medium"
                v-if="slide.title"
                v-html="slide.title"
              ></h3>
              <p
                class="text-ternary text-tiny pb-8 leading-7"
                v-if="slide.subtitle"
                v-html="slide.subtitle"
              ></p>
              <div class="mb-6 flex justify-center">
                <a
                  href="#"
                  class="theme-btn text-sms border-2 border-secondary bg-white hover:border-greendark text-secondary hover:text-white uppercase font-medium py-4 px-10"
                >
                  <span class="relative z-10" v-if="slide.buttontext">{{slide.buttontext}}</span>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
  <!-- end service-area -->
</template>

<script>
import Slider from "@/components/common/Slider";
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";

export default {
  name: "Services",
  props: {
    content: {
      type: Object
    }
  },

  components: { Slider, SectionHeading, SectionTitle, SectionSubtitle }
};
</script>
