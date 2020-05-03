<template>
  <div class="header-area">
    <nav>
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

      <div class="header-menu-content bg-white z-20">
        <div class="lg:max-w-desktop lg:w-full m-auto lg:px-8 md:max-w-full sm:max-w-full md:px-4 sm:px-4 main-header-container">
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
                              <li
                                class="pb-3 hover:text-secondary ease-in-out duration-300"
                              >business</li>
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
                              <li
                                class="pb-3 hover:text-secondary ease-in-out duration-300"
                              >business</li>
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  data: function() {
    return {
      isClockActive: false,
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
  }
};
</script>
