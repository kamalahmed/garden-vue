<template>
  <div class="testimonial-item">
    <p class="text-2xl font-normal lg:w-7/12 mx-auto pb-8">"{{testimonial.content}}"</p>
    <span class="author font-semibold text-base block">{{testimonial.name}}</span>
    <span class="content text-tiny block" v-if="testimonial.address">{{testimonial.address}}</span>
  </div>
</template>

<script>
export default {
  name: "TestimonialSingle",
  props: {
    testimonial: {
      type: Object
    }
  }
};
</script>
