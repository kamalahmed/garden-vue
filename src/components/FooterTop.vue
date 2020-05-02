<template>
  <div class="footer-top-bar border-b border-gray-300 py-6 mb-12">
    <div class="lg:flex flex-wrap">
      <div class="lg:w-9/12 md:w-full" v-if="content.pageLinks">
        <div class="footer-menu-container">
          <ul class="main-dropdown flex flex-wrap items-center font-normal">
            <li v-for="(plink, i) in content.pageLinks" :key="i">
              <a
                :href="plink.url"
                class="text-ternary pb-1 mr-8 hover:text-secondary ease-in-out duration-300"
                v-text="plink.name"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:w-3/12 md:w-full" v-if="content.socialLinks">
        <div class="social-profile">
          <ul class="flex items-center lg:justify-end md:justify-start lg:pt-0 md:pt-5 sm:pt-5">
            <li class="text-lg" v-for="(slink, i) in content.socialLinks" :key="i">
              <a
                :href="slink.url"
                class="text-gray-500 p-4 hover:text-secondary focus:outline-none ease-in-out duration-300"
              >
                <font-awesome-icon :icon="['fab', slink.icon]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer top bar -->
</template>

<script>
export default {
  name: "FooterTop",
  props: {
    content: {
      type: Object
    }
  }
};
</script>
