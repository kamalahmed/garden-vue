<template>
<div class="border-b header-top-bar bg-white">
        <div class="lg:max-w-desktop lg:w-full m-auto lg:px-8 md:max-w-full sm:max-w-full md:p-0 xs:p-0">
          <!-- START TOP HEADER MENU -->
          <div>
            <div class="flex items-center justify-between">
              <ul class="sm:flex md:flex items-center header-info-bar relative">
                <li
                  class="lg:mr-4 lg:pr-4 md:border-l sm:border-l lg:pt-3 lg:pb-3 lg:pl-4 md:p-3 sm:p-3 text-sms"
                >
                  <a
                    href="tel:(222) 400-630"
                    class="flex items-center text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'phone-alt']"
                      :class="'mr-1 text-primary text-base'"
                    />

                    <span class="md:hidden sm:hidden lg:inline-block">(222) 400-630</span>
                  </a>
                </li>
                <li
                  class="lg:mr-4 lg:pr-4 md:border-l sm:border-l lg:pt-3 lg:pb-3 lg:pl-4 md:p-3 sm:p-3 text-sms"
                >
                  <a
                    href="mailto:contact@ekko-theme.com"
                    class="flex items-center text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                  >
                    <font-awesome-icon
                      :icon="['far', 'envelope']"
                      :class="'mr-1 text-primary text-base'"
                    />
                    <span class="md:hidden sm:hidden lg:inline-block">contact@ekko-theme.com</span>
                  </a>
                </li>
                <li
                  class="flex items-center lg:pr-4 lg:pl-4 md:border-l sm:border-l lg:pt-3 lg:pb-3 md:border-r sm:border-r text-sms text-primary topbar-opening-hours"
                  :class="{'active': isClockActive}"
                >
                  <font-awesome-icon
                    @click="isClockActive=true"
                    :icon="['far', 'clock']"
                    :class="'mr-1 text-primary text-base'"
                    
                  />
                  <span
                    class="md:hidden sm:hidden lg:inline-block z-30 ml-1 text-black"
                    @click="isClockActive=false"
                  >Monday - Friday: 10:00 - 18:00</span>
                </li>
              </ul>
              <div class="flex items-center header-action-bar">
                <ul class="flex items-center social-action">
                  <li
                    class="md:pr-4 md:pl-4 md:pt-3 md:pb-3 md:border-l sm:border-l sm:pr-4 sm:pl-4 sm:pb-3 sm:pt-3 text-sm"
                  >
                    <a
                      href="#"
                      class="text-primary inline-block hover:text-secondary focus:outline-none ease-in-out duration-300"
                    >
                      <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                  </li>
                  <li
                    class="md:pr-4 md:pl-4 md:pt-3 md:pb-3 md:border-l sm:border-l sm:pr-4 sm:pl-4 sm:pb-3 sm:pt-3 text-sm"
                  >
                    <a
                      href="#"
                      class="text-primary inline-block hover:text-secondary focus:outline-none ease-in-out duration-300"
                    >
                      <font-awesome-icon :icon="['fab', 'twitter']" />
                    </a>
                  </li>
                  <li
                    class="md:pr-4 md:pl-4 md:pt-3 md:pb-3 md:border-l sm:border-l sm:pr-4 sm:pl-4 sm:pb-3 sm:pt-3 md:border-r sm:border-r text-sm"
                  >
                    <a
                      href="#"
                      class="text-primary inline-block hover:text-secondary focus:outline-none ease-in-out duration-300"
                    >
                      <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                  </li>
                </ul>
                <div class="header-action z-20 flex items-center md:hidden sm:hidden lg:flex">
                  <button
                    class="border-0 pr-5 pl-5 pt-3 pb-3 bg-transparent text-primary hover:text-secondary ease-in-out duration-300 focus:outline-none search-icon"
                    @click="isSearchFormOpen = true"
                  >
                    <font-awesome-icon :icon="['fas', 'search']" />
                  </button>
                  <div class="relative">
                    <transition name="slide-fade">
                    <div
                      class="search-form -mt-6 mr-3 bg-white p-3 rounded shadow-sm border border-gray-100 absolute top-0 right-0 w-56"
                      v-show="isSearchFormOpen"
                    >
                      <button
                        class="absolute border-0 bg-transparent text-primary right-0 top-0 w-8 h-8 hover:text-secondary ease-in-out duration-300 search-form-close focus:outline-none"
                         @click="isSearchFormOpen = false"
                      >
                        <font-awesome-icon :icon="['fas', 'times']" />
                      </button>
                      <div class="relative mt-5">
                        <input
                          aria-label="Search ..."
                          name="text"
                          type="text"
                          required
                          class="appearance-none bg-lighter rounded relative block w-full px-3 py-2 placeholder-gray-500 focus:outline-none focus:z-10 sm:text-sm sm:leading-5"
                          placeholder="Search ..."
                        />
                        <button
                          class="absolute border-0 bg-transparent text-black right-0 top-0 w-12 h-8 hover:text-secondary ease-in-out duration-300"
                        >
                          <font-awesome-icon :icon="['fas', 'search']" />
                        </button>
                      </div>
                    </div>
                    </transition>

                  </div>
                  <div class="flex items-center">
                    <div>
                      <a
                        href="#"
                        class="inline-block text-primary hover:text-secondary ease-in-out duration-300"
                      >
                        <span>
                          <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                        </span>
                      </a>
                    </div>
                    <div class="relative">
                      <ul class="language-menu md:border-r md:pd-3 sm:p-3 text-sm">
                        <li>
                          <button
                            class="max-w-xs flex items-center rounded-full text-primary focus:outline-none focus:shadow-solid pl-2"
                          >
                            <img
                              class="h-3 w-4 mr-1"
                              :src="require('@/assets/img/lang-img.png')"
                              alt="language"
                            />
                            <span>EN</span>
                          </button>
                          <ul
                            class="language-menu-dropdown origin-top-right absolute right-0 mt-3 w-16 rounded bg-white shadow-lg"
                          >
                            <li>
                              <a
                                href="#"
                                class="flex items-center px-3 py-1 text-primary hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >
                                <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img2.png')"
                                  alt="language"
                                />
                                <span>FR</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center px-3 py-1 text-primary hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >
                                <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img3.png')"
                                  alt="language"
                                />
                                <span>DE</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center px-3 py-1 text-primary hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >
                                <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img4.png')"
                                  alt="language"
                                />
                                <span>ES</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END TOP HEADER MENU -->
        </div>
      </div>
</template>

<script>
export default {
  name: "HeaderTop",
  data: function() {
    return {
      isClockActive: false,
      isSearchFormOpen: false,

    };
  },
};
</script>

<style scoped>
/* durations and timing functions.              */
.slide-fade-enter-active, .slide-fade-leave-active  {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>