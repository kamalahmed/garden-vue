<template>
  <h2 class="text-primary font-bold text-lg pb-4" :class="classname" v-html="text"></h2>
</template>

<script>

export default {
  name: "SectionTitle",
  props: ['classname', 'text']

}
</script>
