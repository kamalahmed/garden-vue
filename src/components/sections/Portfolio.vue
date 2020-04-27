<template>
  <section class="portfolio-area pt-space5 pb-space3">
    <div class="container">
      <SectionHeading>
        <SectionTitle :text="content.title" />
        <SectionSubtitle :text="content.subtitle" />
      </SectionHeading>
      <!-- end section-heading -->
      <div class="pt-space3">
        <div class="flex flex-wrap -ml-3 -mr-3">
          <PortfolioSingle
            v-for="(portfolio, i) in content.portfolios"
            :key="i"
            :portfolio="portfolio"
          />
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
</template>

<script>
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";
import PortfolioSingle from "@/components/PortfolioSingle.vue";

export default {
  name: "Portfolio",
  props: {
    content: {
      type: Object
    }
  },
  components: { PortfolioSingle, SectionHeading, SectionTitle, SectionSubtitle }
};
</script>
