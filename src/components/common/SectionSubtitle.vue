<template>
  <p class="text-lg text-ternary leading-7" :class="classname"  v-html="text"></p>
</template>

<script>

export default {
  name: "SectionSubtitle",
  props: ['classname', 'text']
}
</script>
