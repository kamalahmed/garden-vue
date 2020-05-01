<template>
  <section class="footer-area text-tiny">
    <div class="container">
        <FooterTop :content="content.footerTop"/>
      <div class="footer-bottom-bar text-ternary">
        <div class="flex flex-wrap">
            <FooterWidget  v-for="(widget, index) in content.footerBottom.widgets"
            :key="index" :widget="widget" />
        </div>
      </div>
      <!-- end footer bottom bar -->
    </div>
    <!-- container -->
    <FooterCredit v-if="content.copyRight" :credit="content.copyRight" />
  </section>
</template>

<script>
import FooterTop from "@/components/FooterTop.vue";
import FooterWidget from "@/components/FooterWidget.vue";
import FooterCredit from "@/components/FooterCredit.vue";

export default {
  name: "FooterSection",
  props: {
    content: {
      type: Object
    }
  },
  components: {
    FooterTop,
    FooterWidget,
    FooterCredit
  }
};
</script>
