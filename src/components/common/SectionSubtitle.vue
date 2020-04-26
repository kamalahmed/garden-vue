<template>
  <p class="text-semibase text-ternary" :class="classname"  v-html="text"></p>
</template>

<script>

export default {
  name: "SectionSubtitle",
  props: ['classname', 'text']
}
</script>
