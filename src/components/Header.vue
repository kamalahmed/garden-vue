<template>
  <header class="header-area">
    <nav>
      <div class="border-b header-top-bar bg-white">
        <div class="container">
          <!-- START TOP HEADER MENU -->
          <div>
            <div class="flex items-center justify-between">
              <ul class="flex items-center">
                <li class="mr-4 pr-4 border-l pt-3 pb-3 pl-4 text-sm">
                  <a
                    href="#"
                    class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                  >
                    <i class="fa fa-phone mr-1 text-primary text-base"></i> (222) 400-630
                  </a>
                </li>
                <li class="mr-4 pr-4 border-l pt-3 pb-3 pl-4 text-sm">
                  <a
                    href="#"
                    class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                  >
                    <i class="fa fa-envelope mr-1 text-primary text-base"></i> contact@ekko-theme.com
                  </a>
                </li>
                <li class="pr-4 pl-4 border-l pt-3 pb-3 border-r text-sm text-primary">
                  <i class="fa fa-clock-o mr-1 text-black text-base"></i> Monday - Friday: 10:00 - 18:00
                </li>
              </ul>
              <div class="flex items-center">
                <ul class="flex items-center">
                  <li class="pr-4 pl-4 pt-3 pb-3 border-l text-sm">
                    <a
                      href="#"
                      class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                    >
                      <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                  </li>
                  <li class="pr-4 pl-4 pt-3 pb-3 border-l text-sm">
                    <a
                      href="#"
                      class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                    >
                       <font-awesome-icon :icon="['fab', 'twitter']" />
                    </a>
                  </li>
                  <li class="pr-4 pl-4 pt-3 pb-3 border-l border-r text-sm">
                    <a
                      href="#"
                      class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"
                    >
                      <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                  </li>
                </ul>
                <div class="header-action z-20 flex items-center">
                  <button
                    class="border-0 pr-5 pl-5 pt-3 pb-3 bg-transparent text-primary hover:text-secondary ease-in-out duration-300 focus:outline-none search-icon"
                  >
                    <font-awesome-icon :icon="['fas', 'search']" />
                  </button>
                  <div class="relative">
                    <div
                      class="search-form hidden -mt-6 mr-3 bg-white p-3 rounded shadow-sm border border-gray-100 absolute top-0 right-0 w-56"
                    >
                      <button
                        class="absolute border-0 bg-transparent text-primary right-0 top-0 w-8 h-8 hover:text-secondary ease-in-out duration-300 search-form-close focus:outline-none"
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
                      <ul class="hover-menu border-r pt-3 pb-3 pr-5 pl-5">
                        <li>
                          <button
                            class="max-w-xs flex items-center text-sm rounded-full text-primary focus:outline-none focus:shadow-solid"
                          >
                            <img
                              class="h-3 w-4 mr-1"
                              :src="require('@/assets/img/lang-img.png')"
                              alt
                            />
                            <span>EN</span>
                          </button>
                          <ul
                            class="hover-menu-dropdown origin-top-right absolute right-0 mt-3 w-16 rounded bg-white shadow-lg hidden"
                          >
                            <li>
                              <a
                                href="#"
                                class="flex items-center px-3 py-1 text-sm text-primary hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >
                                <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img2.png')"
                                  alt
                                />
                                <span>FR</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center px-3 py-1 text-sm text-primary hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >
                                <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img3.png')"
                                  alt
                                />
                                <span>DE</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center px-3 py-1 text-sm text-primary hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >
                                <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img4.png')"
                                  alt
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
      <div class="header-menu-content bg-white z-20">
        <div class="container">
          <!-- START NAVBAR -->
          <div>
            <div class="flex items-center justify-between h-24">
              <div>
                <a href="#">
                  <img :src="require('@/assets/img/logo.png')" alt="Ekko garden" />
                </a>
              </div>
              <div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline">
                    <div class="relative">
                      <ul
                        class="hover-menu main-dropdown flex items-center uppercase text-sm font-medium"
                      >
                        <li>
                          <a
                            href="#"
                            class="text-primary mr-8 hover:text-secondary ease-in-out duration-300"
                          >
                            Demos
                            <i class="fa fa-angle-down"></i>
                          </a>
                          <ul
                            class="hover-menu-dropdown hidden origin-top-left absolute mt-3 left-0 p-4 w-32 rounded bg-white shadow-sm border border-gray-200"
                          >
                            <li>
                              <a
                                href="#"
                                class="inline-block text-xs text-gray-600 hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >Demos 1</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="inline-block pt-2 text-xs text-gray-600 hover:text-secondary ease-in-out duration-300"
                                role="menuitem"
                              >Demos 2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-primary mr-8 hover:text-secondary ease-in-out duration-300"
                          >pages</a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-primary mr-8 hover:text-secondary ease-in-out duration-300"
                          >portfolio</a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-primary mr-8 hover:text-secondary ease-in-out duration-300"
                          >blog</a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-primary mr-8 hover:text-secondary ease-in-out duration-300"
                          >shop</a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-primary mr-8 hover:text-secondary ease-in-out duration-300"
                          >blocks</a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-primary hover:text-secondary ease-in-out duration-300"
                          >elements</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  class="theme-btn text-sm bg-secondary text-white uppercase font-medium py-5 px-10"
                >
                  <span class="relative z-10">get a quote</span>
                </a>
              </div>
              <div class="-mr-2 flex md:hidden">
                <!-- Mobile menu button -->
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                >
                  <!-- Menu open: "hidden", Menu closed: "block" -->
                  <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <!-- Menu open: "block", Menu closed: "hidden" -->
                  <svg
                    class="hidden h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
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
    </nav>
  </header>
  <!-- END HEADER -->
</template>

<script>
export default {
  name: "Header"
};
</script>
