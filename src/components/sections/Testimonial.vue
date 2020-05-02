<template>
  <!-- START TESTIMONIAL-AREA -->
  <section
    class="choose-area relative z-1 text-white testimonial-area nav-carousel bg-fixed bg-no-repeat bg-cover lg:-mt-space14 md:-mt-space0 pt-space15 md:pt-space5 pb-space8 mb:pb-space5 text-center"
    :style="{ backgroundImage: 'url(' + content.image + ')' }"
  >
    <div class="container">
      <div class="testimonial-wrap">
        <div class="testimonial-carousel lg:w-11/12 mx-auto">
          <Slider :itemPerSlide="content.itemPerSlide" :responsive="content.responsive">
            <TestimonialSingle
              v-for="(testimonial, i) in content.testimonials"
              :key="i"
              :testimonial="testimonial"
            />
          </Slider>
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
  <!-- end choose-area -->
  <!-- END TESTIMONIAL-AREA -->
</template>

<script>
import Slider from "@/components/common/Slider";
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";
import TestimonialSingle from "@/components/TestimonialSingle";

export default {
  name: "Testimonial",
  props: {
    content: {
      type: Object
    }
  },
  components: {
    Slider,
    TestimonialSingle,
    SectionHeading,
    SectionTitle,
    SectionSubtitle
  }
};
</script>
