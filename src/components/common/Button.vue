<template>
<a
              :href="link"
              class="theme-btn text-sms bg-secondary text-white uppercase font-medium py-5 px-10"
              :class="classname"
            >
              <span class="relative z-10" v-html="text"></span>
            </a>
</template>

<script>

export default {
  name: "Button",
  props: [ 'classname', 'text', 'link']

}
</script>
