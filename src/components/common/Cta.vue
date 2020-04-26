<template>
  <div class="cta-box bg-white shadow-sm p-12">
    <div class="flex items-center justify-between">
      <div class="w-1/2">
        <SectionHeading>
          <SectionTitle v-if="content.title" :text="content.title" classname="text-primary font-bold text-2xxl pb-2" />
          <SectionSubtitle v-if="content.subtitle" :text="content.subtitle" />
        </SectionHeading>
      </div>
      <div class="w-1/2" v-if="content.btnlink && content.btntext">
        <div class="btn-box flex justify-end">
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
