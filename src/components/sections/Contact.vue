<template>
  <section
    class="choose-area relative z-1 text-white contact-area bg-fixed bg-no-repeat bg-cover py-space5"
    :style="{'background-image': 'url('+require('@/assets/img/garden-img7.jpg')+')'}"
  >
    <div class="container">
      <div class="contact-wrap flex flex-wrap relative z-10">
        <div class="lg:w-1/2 md:w-full sm:w-full map-container">
          <GmapMap
            :center="{lat:34.058702, lng:-118.272881}"
            :zoom="13"
            map-type-id="terrain"
            :class="'w-full h-space18'"
            :options="{styles:mapStyle}"
          >
            <GmapMarker ref="mapRef"
    :position="google && new google.maps.LatLng(34.058702, -118.272881)" />
          </GmapMap>

          <!-- end map -->
        </div>
        <div class="lg:w-1/2 md:w-full sm:w-full">
          <div class="contact-details lg:pl-20 md:pt-20 sm:pt-20 lg:pt-0">
            <div class="section-heading">
              <h2 class="font-bold text-4xxl pb-4">Let's get in touch</h2>
              <p
                class="text-lg leading-7"
              >We provide free estimates and consultations. You can also reach us directly at (222) 400-630.</p>
            </div>
            <!-- end section-heading -->
            <div class="contact-form-action pt-8">
              <form method="post">
                <div class="form-group">
                  <input
                    name="text"
                    type="text"
                    required
                    class="appearance-none bg-white text-primary relative block w-full px-6 py-4 mb-3 placeholder-ternary focus:outline-none focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Your name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    type="email"
                    required
                    class="appearance-none bg-white text-primary relative block w-full px-6 py-4 mb-3 placeholder-ternary focus:outline-none focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Your email"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="appearance-none bg-white text-primary relative block w-full px-6 pt-4 h-space4 mb-3 placeholder-ternary focus:outline-none focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div class="flex justify-center text-center">
                  <a
                    href="#"
                    class="theme-btn w-full text-sms bg-secondary text-white uppercase font-medium py-5 px-10"
                  >
                    <span class="relative z-10">send message</span>
                  </a>
                </div>
              </form>
            </div>
            <!-- end contact-form-action -->
          </div>
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
import {gmapApi} from 'vue2-google-maps'

export default {
  name: "Contact",
  data: function () {
    return {
      mapStyle : [
                {
                    "featureType" : "road",
                    "stylers" : [
                        {"color" : "#ffffff"}
                    ]
                }, {
                    "featureType" : "water",
                    "stylers" : [
                        {"color" : "#e9e9e9"}
                    ]
                }, {
                    "featureType" : "landscape",
                    "stylers" : [
                        {"color" : "#f5f5f5"}
                    ]
                }, {
                    "elementType" : "labels.text.fill",
                    "stylers" : [
                        {"color" : "transparent"}
                    ]
                }, {
                    "featureType" : "poi",
                    "stylers" : [
                        {"color" : "#fefefe"}
                    ]
                }, {
                    "elementType" : "labels.text",
                    "stylers" : [
                        {"saturation" : 1},
                        {"weight" : 0.1},
                        {"color" : "#737980"}
                    ]
                }
            ]
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  components: { SectionHeading, SectionTitle, SectionSubtitle },
  computed: {
    google: gmapApi
  },
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 34.058702, lng: -118.272881 });
    });
  }
};
</script>
