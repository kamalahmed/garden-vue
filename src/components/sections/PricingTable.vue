<template>
  <section class="pricing-area text-center pb-space5 z-10">
    <div class="container">
      <SectionHeading>
        <SectionTitle :text="content.title" />
        <SectionSubtitle :text="content.subtitle" />
      </SectionHeading>
      <!-- end section-heading -->
      <div class="pt-space1">
        <div class="switcher-wrap">
          <!-- start switcher -->
          <div class="switcher" @click="isChecked=!isChecked" v-if="content.showDurationToggle">
            <label
              class="toggler text-primary font-semibold mr-5"
              id="filt-monthly"
            >{{content.planDuration[0]}}</label>
            <div class="toggle" :class="{'active': isChecked}">
              <input type="checkbox" id="switcher" class="check" />
              <b class="b switch"></b>
            </div>
            <label
              class="toggler text-primary font-semibold ml-5"
              id="filt-yearly"
            >{{content.planDuration[1]}}</label>
          </div>
          <!-- end switcher -->
          <div class="flex flex-wrap mt-20">
            <Plan v-for="(singlePlan, i) in content.plans" :key="i" :plan="singlePlan" :isChecked="isChecked" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from "@/components/common/SectionHeading";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubtitle from "@/components/common/SectionSubtitle";
import Plan from "@/components/Plan.vue";

export default {
  name: "PricingTable",
  data: function () {
    return {
      isChecked: false,
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  components: { Plan, SectionHeading, SectionTitle, SectionSubtitle }
};
</script>
