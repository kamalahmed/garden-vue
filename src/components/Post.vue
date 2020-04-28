<template>
  <div class="blog-card lg:w-1/3 md:w-1/2 sm:w-full mb-16 px-4 duration-300">
    <div class="bg-white p-4 mr-0 ml-0">
      <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full" />
      <div class="px-4 pt-5 pb-2">
        <h3 class="blog-card__title hover:text-secondary" >
          <a :href="post.link">{{post.title}}</a>
        </h3>
        <a
          :href="post.link"
          class="blog-card__link hover:text-secondary "
        >
          {{post.buttonText}}
          <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object
    }
  }
};
</script>
