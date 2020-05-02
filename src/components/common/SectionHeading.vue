<template>
  <div :class="classname">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SectionHeading",
  props: {
    classname :{
      type: String,
      default : "section-heading text-center"
    }
  
  }
};
</script>
