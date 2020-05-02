<template>
<section class="cta-area pt-space5 pb-space5 text-center">
    <div class="container lg:w-full md:w-space19">
        <div class="section-heading">
            <h2 class="text-primary font-bold lg:text-4xxl md:text-2xxl pb-5" v-if="content.title" v-html="content.title">
            </h2>
            <h3 class="text-secondary font-bold lg:text-4xxl md:text-2xxl pb-6" v-if="content.subtitle">{{content.subtitle}}</h3>
        </div><!-- end section-heading -->
        <div class="flex justify-center pb-5">
            <Button :text="content.buttonText" :link="content.buttonLink" />
        </div>
        <p class="text-lg text-ternary">Or <a :href="content.contactLink" class="text-secondary hover:text-primary ease-in-out duration-300"> {{content.contactLinkText}} </a> and we will get back to you.</p>
    </div><!-- container -->
</section><!-- end cta-area -->
</template>

<script>
import Button from "@/components/common/Button";

export default {
  name: "CallToAction",
  props: {
    content: {
      type: Object
    }
  },
  components: { Button }
};
</script>
