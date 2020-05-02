<template>
<section class="about-area bg-greenlight -mt-space11 pt-space13  md:pb-10">
    <div class="container">
      <div class="lg:flex items-center">
        <div class="about-img lg:w-1/2" v-if="content.image">
          <img :src="content.image" alt="Gardener img" />
        </div>
        <div class="about-heading lg:w-1/2 lg:pl-24 md:pt-10 sm:pt-10">
          <SectionHeading classname="section-heading">
            <SectionTitle :text="content.title" />
            <SectionSubtitle :text="content.subtitle" classname="text-semibase text-ternary leading-7" />
          </SectionHeading>
          <!-- end section-heading -->
          <div class="btn-box flex mt-8">
            <Button :text="content.btntext" :link="content.btnlink" />
          </div>
        </div>
      </div>
        <!-- About Content Box -->
        
      <Cta :content="content.cta" />
        <!-- Call to Action Box -->
    </div>
    <!-- container -->
  </section>
  <!-- end about-area -->
</template>

<script>
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";
import Button from "@/components/common/Button";
import Cta from "@/components/common/Cta";

export default {
  name: "About",
  props: {
    content: {
      type: Object
    }
  },
  components: { SectionHeading, SectionTitle, SectionSubtitle, Button, Cta }
};
</script>
