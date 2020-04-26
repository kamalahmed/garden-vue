<template>
  <h2 :class="classname" v-html="text"></h2>
</template>

<script>

export default {
  name: "SectionTitle",
  props: {
    classname :{
      type: String,
      default : 'text-primary font-bold text-4xxl pb-4'
    },
    text: {
      type: String,
      default: '',
    }
  }

}
</script>
