<template>
  <section class="blog-area bg-greenlight pt-space5 pb-space5">
    <div class="container">
      <SectionHeading>
        <SectionTitle :text="content.title" />
        <SectionSubtitle :text="content.subtitle" />
      </SectionHeading>
      <!-- end section-heading -->
      <div class="pt-space3">
        <div class="flex flex-wrap -ml-4 -mr-4">
          <Post v-for="post in content.posts" :key="post.id" :post="post" />
        </div>
        <!-- end service-wrap -->
        <div class="flex justify-center" v-if="content.loadMoreText && content.loadMoreLink">
          <a
            :href="content.loadMoreLink"
            class="theme-btn text-sms bg-secondary text-white uppercase font-medium py-5 px-10"
          >
            <span class="relative z-10">{{content.loadMoreText}}</span>
          </a>
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
  <!-- end blog-area -->
</template>

<script>
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";
import Post from "@/components/Post.vue";

export default {
  name: "LatestBlog",
  props: {
    content: {
      type: Object
    }
  },
  components: { Post, SectionHeading, SectionTitle, SectionSubtitle }
};
</script>
