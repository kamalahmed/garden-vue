<template>
  <div class="cta-box bg-white shadow-sm p-12 sm:mt-20 md:mt-20 lg:mt-0">
    <div class="lg:flex items-center justify-between">
      <div class="lg:w-1/2">
        <SectionHeading classname="'section-heading'">
          <SectionTitle v-if="content.title" :text="content.title" classname="text-primary font-bold text-2xxl pb-2" />
          <SectionSubtitle v-if="content.subtitle" :text="content.subtitle" classname="text-base text-ternary leading-7" />
        </SectionHeading>
      </div>
      <div class="lg:w-1/2" v-if="content.btnlink && content.btntext">
        <div class="btn-box flex lg:justify-end sm:mt-10 md:mt-10 lg:mt-0">
          <Button :text="content.btntext" :link="content.btnlink" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";

export default {
  name: "Cta",
  props: {
    content: {
      type: Object
    }
  },
  components: { Button, SectionHeading, SectionTitle, SectionSubtitle }
};
</script>
