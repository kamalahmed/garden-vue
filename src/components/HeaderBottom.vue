<template>
  <div class="header-menu-content bg-white z-40">
    <div
      class="lg:max-w-desktop lg:w-full m-auto lg:px-8 md:max-w-full sm:max-w-full md:px-4 sm:px-4 main-header-container"
    >
      <!-- START NAVBAR -->
      <div>
        <div
          class="main-menu-wrapper flex items-center justify-between lg:h-24 sm:h-16 md:h-16 relative"
        >
          <div>
            <a class="logo font-bold text-2xl" href="/" title="Ekko Gardener">Ekko Garden</a>
          </div>
          <div class="main-menu-content" :class="{'active': isMobileMenuOpen}">
            <div class="relative z-10">
              <ul class="main-dropdown flex items-center uppercase text-sm font-medium">
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-10 mr-8 hover:text-secondary ease-in-out duration-300"
                  >
                    Demos
                    <font-awesome-icon
                      :icon="['fas', 'angle-down']"
                      :class="'md:hidden sm:hidden lg:inline'"
                    />
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 490.656 490.656"
                    style="enable-background:new 0 0 490.656 490.656;"
                    xml:space="preserve"
                    :class="'hidden md:block sm:block lg:hidden menu-open-icon absolute  w-4 text-center top-0 right-0'"
                    @click="handleDropDown"
                  >
                    <g>
                      <path
                        d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,347.581L18.203,120.467c-4.16-4.16-10.923-4.16-15.083,0    c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136l234.667-234.667    C491.696,131.368,491.696,124.605,487.536,120.445z"
                      />
                    </g>
                  </svg>

                  <div
                    class="mega-menu menu-dropdown origin-top-left absolute mt-8 left-0 py-8 w-full rounded-b rounded-l bg-white text-primary"
                  >
                    <div class="flex">
                      <div class="menu-item w-1/4">
                        <ul>
                          <li
                            class="pb-3 hover:text-secondary ease-in-out duration-300"
                          >Software/Marketing</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >business</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >corporate</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Digital Agency</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >eBook</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Event/Conference</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Hosting</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Marketing Agency</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Mobile App</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Mobile App 2</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >SaaS</a>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-item w-1/4">
                        <ul>
                          <li
                            class="pb-3 hover:text-secondary ease-in-out duration-300"
                          >Retail/Services</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Auto Service</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Beauty Salon</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Catering</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Cleaning</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Dentist</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Gardener</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Hair Salon</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Makeup Artist</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Moving</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Pizza</a>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-item w-1/4">
                        <ul>
                          <li class="pb-3 hover:text-secondary ease-in-out duration-300">business</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Architecture</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Construction</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Consulting</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Fitness</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Furniture Shop</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Home Decor</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Jewelry Shop</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Lawyer</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Real Estate</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Renewable Energy</a>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-item w-1/4">
                        <ul>
                          <li
                            class="pb-3 hover:text-secondary ease-in-out duration-300"
                          >Personal/Non-profit</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Digital Agency</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >bbPress Forum</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Fashion Blog</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Health Blog</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Travel Blog</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Charity</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Musical Artist</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >NGO</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300"
                  >pages</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300"
                  >portfolio</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300"
                  >blog</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300"
                  >shop</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300"
                  >blocks</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary text-sms pb-8 hover:text-secondary ease-in-out duration-300"
                  >
                    Elements
                    <font-awesome-icon
                      :icon="['fas', 'angle-down']"
                      :class="'md:hidden sm:hidden lg:inline'"
                    />
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 490.656 490.656"
                    style="enable-background:new 0 0 490.656 490.656;"
                    xml:space="preserve"
                    :class="'hidden md:block sm:block lg:hidden menu-open-icon absolute  w-4 text-center top-0 right-0'"
                    @click="handleDropDown"
                  >
                    <g>
                      <path
                        d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,347.581L18.203,120.467c-4.16-4.16-10.923-4.16-15.083,0    c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136l234.667-234.667    C491.696,131.368,491.696,124.605,487.536,120.445z"
                      />
                    </g>
                  </svg>
                  <div
                    class="mega-menu menu-dropdown origin-top-left absolute mt-8 left-0 py-8 w-full rounded-b rounded-l bg-white text-primary"
                  >
                    <div class="flex">
                      <div class="menu-item w-1/4">
                        <ul>
                          <li
                            class="pb-3 hover:text-secondary ease-in-out duration-300"
                          >Software/Marketing</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >business</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >corporate</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Digital Agency</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >eBook</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Event/Conference</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Hosting</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Marketing Agency</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Mobile App</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Mobile App 2</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >SaaS</a>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-item w-1/4">
                        <ul>
                          <li
                            class="pb-3 hover:text-secondary ease-in-out duration-300"
                          >Retail/Services</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Auto Service</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Beauty Salon</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Catering</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Cleaning</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Dentist</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Gardener</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Hair Salon</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Makeup Artist</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Moving</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Pizza</a>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-item w-1/4">
                        <ul>
                          <li class="pb-3 hover:text-secondary ease-in-out duration-300">business</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Architecture</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Construction</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Consulting</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Fitness</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Furniture Shop</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Home Decor</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Jewelry Shop</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Lawyer</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Real Estate</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Renewable Energy</a>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-item w-1/4">
                        <ul>
                          <li
                            class="pb-3 hover:text-secondary ease-in-out duration-300"
                          >Personal/Non-profit</li>
                          <li>
                            <a
                              href="#"
                              class="inline-block text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Digital Agency</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >bbPress Forum</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Fashion Blog</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Health Blog</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Travel Blog</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Charity</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >Musical Artist</a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300"
                              role="menuitem"
                            >NGO</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="main-dropdown-btn hidden sm:block md:block lg:hidden px-5 pb-4">
                <a
                  href="#"
                  class="theme-btn block text-center text-sms bg-secondary text-white uppercase font-medium py-5 px-10"
                >
                  <span class="relative z-10">get a quote</span>
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <a
              href="#"
              class="theme-btn text-sms bg-secondary text-white uppercase font-medium py-5 px-10"
            >
              <span class="relative z-10">get a quote</span>
            </a>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <div class="mt-2 mr-3">
              <a href="#">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
              </a>
            </div>
            <button
              class="menu-open inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none"
              @click="isMobileMenuOpen=!isMobileMenuOpen"
            >
              <svg
                class="block h-6 w-6 bars"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                :class="{'active': isMobileMenuOpen}"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6 times"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                :class="{'active': isMobileMenuOpen}"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- END NAVBAR -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBottom",
  data: function() {
    return {
      isMobileMenuOpen: false,
      isDropdownOpen: false
    };
  },
  methods: {
    handleDropDown(event) {
      $(event.target)
        .closest("li")
        .siblings()
        .removeClass("active")
        .find(".menu-dropdown")
        .removeClass("active");
      $(event.target)
        .closest("li")
        .toggleClass("active")
        .find(".menu-dropdown")
        .toggleClass("active");
      return false;
    }
  },
  mounted() {
    var nav = document.querySelector(".header-menu-content");

    window.document.onscroll = () => {
      console.log("hello");
      if (window.scrollY > 50) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
      } else {
        document.body.style.paddingTop = "0px";
        document.body.classList.remove("fixed-nav");
      }
    };
  }
};
</script>
