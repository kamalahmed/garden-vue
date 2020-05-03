<template>
  <div class="lg:w-1/4 md:w-1/2 sm:w-full footer-widget mb-8">
    <template v-if="'link' === widget.type">
      <div>
        <h3 class="text-base font-semibold text-primary pb-4">{{widget.title}}</h3>
        <div class="footer-menu-container">
          <ul class="main-dropdown font-normal" v-if="widget.links">
            <li class="block" v-for="(plink, i) in widget.links" :key="i">
              <a
                :href="plink.url"
                class="inline-block mb-2 hover:text-secondary ease-in-out duration-300"
                v-text="plink.name"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </template>

    <template v-else-if="'text' === widget.type">
      <h3 class="text-base font-medium text-primary pb-4">{{widget.title}}</h3>
      <p class="leading-7">{{widget.description}}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "FooterWidget",
  props: {
      widget : {
          type : Object
      }
  }
};
</script>
