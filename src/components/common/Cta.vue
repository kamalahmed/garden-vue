<template>
  <div class="cta-box bg-white shadow-sm p-12">
    <div class="flex items-center justify-between">
      <div class="w-1/2">
        <h3
          class="text-primary text-mediumbase font-medium pb-3"
          v-if="content.title"
          v-html="content.title"
        ></h3>
        <p class="text-semibase text-ternary" v-if="content.subtitle" v-html="content.subtitle"></p>
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

export default {
  name: "Cta",
  props: {
    content: {
      type: Object
    }
  },
  components: { Button }
};
</script>
