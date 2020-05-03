<template>
  <div class="header-area">
    <HeaderTop />
    <HeaderBottom />
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";

export default {
  name: "HeaderSection",
  components: { HeaderTop, HeaderBottom }
};
</script>
