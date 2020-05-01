<template>
  <div class="footer-copyright border-t border-gray-300 py-6 text-center">
    <p class="text-ternary">{{credit}}</p>
  </div>
</template>

<script>
export default {
  name: "FooterCredit",
  props: ['credit']
};
</script>
