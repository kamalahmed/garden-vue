<template>
  <div
    class="lg:w-1/3 md:w-1/2 sm:w-full mb-8 bg-white pricing-item bg-white relative"
    :class=" plan.isFeatured ? 'pricing-item-active z-3' : 'z-2'"
  >
    <div
      class="license-type py-6 text-lg font-semibold"
      :class="plan.isFeatured ? 'bg-secondary text-white' : 'bg-lighter text-primary'"
    >{{plan.title}}</div>
    <div class="price-icon text-5xxl text-secondary pt-8 pb-8" v-if="plan.icon">
      <img :src="plan.icon" alt="plan icon" class="inline w-space3" />
    </div>

    <div class="license-price month active">
      <span class="pricing-price block text-primary font-light text-5xxl">
        <span class="currency" v-if="plan.currencySymbol">{{plan.currencySymbol}}</span>
        {{plan.monthlyPrice}}
      </span>
      <span class="pricing-time block text-ternary text-base">billed monthly</span>
    </div>

    <div class="license-price year">
      <span class="pricing-price block text-primary font-light text-5xxl">
        <span class="currency" v-if="plan.currencySymbol">{{plan.currencySymbol}}</span>
        {{plan.yearlyPrice}}
      </span>
      <span class="pricing-time block text-ternary text-base">billed yearly</span>
    </div>

    <ul class="pt-8">
      <li
        class="border-b border-gray-200 py-4 text-ternary text-base"
        v-for="(feature, i) in plan.features"
        :key="i"
      >{{feature}}</li>
    </ul>

    <div class="pt-6 pb-12 flex justify-center">
      <a
        :href="plan.buttonLink"
        class="theme-btn text-sms hover:border-greendark hover:text-white uppercase font-medium py-4 px-10"
        :class="plan.isFeatured ? 'bg-secondary text-white' : 'bg-white text-secondary border-2 border-secondary'"
      >
        <span class="relative z-10">{{plan.buttonText}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: {
    plan: {
      type: Object
    }
  }
};
</script>
