<template>
  <p :class="classname"  v-html="text"></p>
</template>

<script>

export default {
  name: "SectionSubtitle",
  props: {
    classname :{
      type: String,
      default : "text-lg text-ternary leading-7"
    },
    text: {
      type: String,
      default: '',
    }
  }
}
</script>
