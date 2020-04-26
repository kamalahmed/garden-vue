<template>
<section class="about-area bg-greenlight -mt-space11 pt-space13">
    <div class="container">
      <div class="flex items-center">
        <div class="about-img w-1/2" v-if="content.image">
          <img :src="require('@/'+content.image)" alt="Gardener img" />
        </div>
        <div class="about-heading w-1/2 pl-24">
          <SectionHeading>
            <SectionTitle :text="content.title" />
            <SectionSubtitle :text="content.subtitle" />
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
