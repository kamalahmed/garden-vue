<template>
<header class="header-area">
    <nav>
        <div class="text-right block lg:hidden absolute top-0 right-0 mr-4 z-30">
            <i class="fa fa-angle-down header-top-open w-8 h-6 leading-6 text-center rounded-b-md rounded-r-md bg-white shadow cursor-pointer text-primary hover:text-secondary ease-in-out duration-300"></i>
        </div>
        <div class="border-b header-top-bar bg-white hidden lg:block">
            <div class="container">
                <!-- START TOP HEADER MENU -->
                <div>
                    <div class="md:flex items-center justify-between">
                        <ul class="sm:flex items-center sm:justify-center header-info-bar">
                            <li class="md:mr-4 md:pr-4 md:border-l md:pt-3 md:pb-3 md:pl-4 sm:p-2 text-sms"><a href="#" class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300">
                            <font-awesome-icon :icon="['fas', 'phone-alt']" :class="'mr-1 text-primary text-base'" /> 
                             (222) 400-630</a></li>
                            <li class="md:mr-4 md:pr-4 md:border-l md:pt-3 md:pb-3 md:pl-4 sm:p-2 text-sms"><a href="#" class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['far', 'envelope']" :class="'mr-1 text-primary text-base'" />  contact@ekko-theme.com</a></li>
                            <li class="md:pr-4 md:pl-4 md:border-l md:pt-3 md:pb-3 md:border-r sm:p-2 text-sms text-primary"><font-awesome-icon :icon="['far', 'clock']" :class="'mr-1 text-primary text-base'" /> Monday - Friday: 10:00 - 18:00</li>
                        </ul>
                        <div class="flex items-center sm:justify-center header-action-bar">
                            <ul class="flex items-center social-action">
                                <li class="md:pr-4 md:pl-4 md:pt-3 md:pb-3 md:border-l sm:p-2 text-sm"><a href="#" class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                                <li class="md:pr-4 md:pl-4 md:pt-3 md:pb-3 md:border-l sm:p-2 text-sm"><a href="#" class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                                <li class="md:pr-4 md:pl-4 md:pt-3 md:pb-3 md:border-l sm:p-2 md:border-r text-sm"><a href="#" class="text-primary hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
                            </ul>
                            <div class="header-action z-20 flex items-center">
                                <button class="border-0 pr-5 pl-5 pt-3 pb-3 bg-transparent text-primary hover:text-secondary ease-in-out duration-300 focus:outline-none search-icon"><font-awesome-icon :icon="['fas', 'search']" /></button>
                                <div class="relative">
                                    <div class="search-form hidden -mt-6 mr-3 bg-white p-3 rounded shadow-sm border border-gray-100 absolute top-0 right-0 w-56">
                                        <button class="absolute border-0 bg-transparent text-primary right-0 top-0 w-8 h-8 hover:text-secondary ease-in-out duration-300 search-form-close focus:outline-none"><font-awesome-icon :icon="['fas', 'times']" /></button>
                                        <div class="relative mt-5">
                                            <input aria-label="Search ..." name="text" type="text" required class="appearance-none bg-lighter rounded relative block w-full px-3 py-2 placeholder-gray-500 focus:outline-none focus:z-10 sm:text-sm sm:leading-5" placeholder="Search ..." />
                                            <button class="absolute border-0 bg-transparent text-black right-0 top-0 w-12 h-8 hover:text-secondary ease-in-out duration-300"><font-awesome-icon :icon="['fas', 'search']" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <div>
                                        <a href="#" class="inline-block text-primary hover:text-secondary ease-in-out duration-300"><span><font-awesome-icon :icon="['fas', 'shopping-cart']" /></span></a>
                                    </div>
                                    <div class="relative">
                                        <ul class="hover-menu md:border-r md:pd-3 sm:p-3 text-sm">
                                            <li>
                                                <button class="max-w-xs flex items-center rounded-full text-primary focus:outline-none focus:shadow-solid">
                                                   <img
                              class="h-3 w-4 mr-1"
                              :src="require('@/assets/img/lang-img.png')"
                              alt
                            />
                                                    <span>EN</span>
                                                </button>
                                                <ul class="hover-menu-dropdown origin-top-right absolute right-0 mt-3 w-16 rounded bg-white shadow-lg hidden">
                                                    <li>
                                                        <a href="#" class="flex items-center px-3 py-1 text-primary hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                            <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img2.png')"
                                  alt
                                />
                                                            <span>FR</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="flex items-center px-3 py-1 text-primary hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                             <img
                                  class="h-3 w-4 mr-1"
                                  :src="require('@/assets/img/lang-img3.png')"
                                  alt
                                />
                                                            <span>DE</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="flex items-center px-3 py-1 text-primary hover:text-secondary ease-in-out duration-300" role="menuitem">
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
                            <a class="logo font-bold text-2xl" href="/" title="Ekko Gardener">Ekko Garden</a>
                        </div>
                        <div>
                            <div class="hidden lg:block">
                                <div class="flex items-baseline">
                                    <div class="relative z-10">
                                        <ul class="hover-menu main-dropdown flex items-center uppercase text-sm font-medium">
                                            <li>
                                                <a href="#" class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300">Demos <i class="fa fa-angle-down"></i></a>
                                                <div class="hidden mega-menu hover-menu-dropdown origin-top-left absolute mt-8 left-0 py-8 w-full rounded-b rounded-l bg-white text-primary">
                                                    <div class="flex">
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">Software/Marketing</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        business
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        corporate
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Digital Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        eBook
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Event/Conference
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Hosting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Marketing Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Mobile App
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Mobile App 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        SaaS
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">Retail/Services</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Auto Service
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Beauty Salon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Catering
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Cleaning
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Dentist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Gardener
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Hair Salon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Makeup Artist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Moving
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Pizza
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">business</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Architecture
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Construction
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Consulting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Fitness
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Furniture Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Home Decor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Jewelry Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Lawyer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Real Estate
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Renewable Energy
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">Personal/Non-profit</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Digital Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        bbPress Forum
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Fashion Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Health Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Travel Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Charity
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Musical Artist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        NGO
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#" class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300">pages</a></li>
                                            <li><a href="#" class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300">portfolio</a></li>
                                            <li><a href="#" class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300">blog</a></li>
                                            <li><a href="#" class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300">shop</a></li>
                                            <li><a href="#" class="text-primary text-sms pb-8 mr-8 hover:text-secondary ease-in-out duration-300">blocks</a></li>
                                            <li>
                                                <a href="#" class="text-primary text-sms pb-8 hover:text-secondary ease-in-out duration-300">Elements <i class="fa fa-angle-down"></i></a>
                                                <div class="mega-menu hidden hover-menu-dropdown origin-top-left absolute mt-8 left-0 py-8 w-full rounded-b rounded-l bg-white text-primary">
                                                    <div class="flex">
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">Software/Marketing</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        business
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        corporate
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Digital Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        eBook
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Event/Conference
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Hosting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Marketing Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Mobile App
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Mobile App 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        SaaS
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">Retail/Services</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Auto Service
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Beauty Salon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Catering
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Cleaning
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Dentist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Gardener
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Hair Salon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Makeup Artist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Moving
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Pizza
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">business</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Architecture
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Construction
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Consulting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Fitness
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Furniture Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Home Decor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Jewelry Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Lawyer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Real Estate
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Renewable Energy
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-item w-1/4">
                                                            <ul>
                                                                <li class="pb-3 hover:text-secondary ease-in-out duration-300">Personal/Non-profit</li>
                                                                <li>
                                                                    <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Digital Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        bbPress Forum
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Fashion Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Health Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Travel Blog
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Charity
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        Musical Artist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                                                        NGO
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:block">
                            <a href="#" class="theme-btn text-sms bg-secondary text-white uppercase font-medium py-5 px-10">
                                <span class="relative z-10"> get a quote</span>
                            </a>
                        </div>
                        <div class="-mr-2 flex lg:hidden">
                            <button class="menu-open inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                                <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- END NAVBAR -->
            </div>
        </div>
        <div class="side-nav-container">
            <div class="side-menu-close-wrap pr-4 pt-4 text-right">
                <button class="side-nav-close inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div><!-- end side-menu-close -->
            <div class="side-menu-wrap p-5">
                <ul class="main-dropdown uppercase text-sm text-white font-medium">
                    <li class="side-nav-item mb-4 relative">
                        <span class="fa fa-angle-down side-menu-open float-right w-6 h-6 leading-6 text-lg text-center rounded hover:bg-gray-700 cursor-pointer"></span>
                        <a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">Demos</a>
                        <ul class="side-dropdown-menu hidden p-3 pt-5">
                            <li class="pb-3 hover:text-secondary ease-in-out duration-300">Software/Marketing</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    business
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    corporate
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Digital Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    eBook
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Event/Conference
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Hosting
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Marketing Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Mobile App
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Mobile App 2
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    SaaS
                                </a>
                            </li>
                            <li class="pt-3 pb-3 hover:text-secondary ease-in-out duration-300">Retail/Services</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Auto Service
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Beauty Salon
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Catering
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Dentist
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Gardener
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Hair Salon
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Makeup Artist
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Moving
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Pizza
                                </a>
                            </li>
                            <li class="pt-3 pb-3 hover:text-secondary ease-in-out duration-300">business</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Architecture
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Construction
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Consulting
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Fitness
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Furniture Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Home Decor
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Jewelry Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Lawyer
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Real Estate
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Renewable Energy
                                </a>
                            </li>
                            <li class="pt-3 pb-3 hover:text-secondary ease-in-out duration-300">Personal/Non-profit</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Digital Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    bbPress Forum
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Fashion Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Health Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Travel Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Charity
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Musical Artist
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    NGO
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="side-nav-item mb-4 relative"><a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">pages</a></li>
                    <li class="side-nav-item mb-4 relative"><a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">portfolio</a></li>
                    <li class="side-nav-item mb-4 relative"><a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">blog</a></li>
                    <li class="side-nav-item mb-4 relative"><a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">shop</a></li>
                    <li class="side-nav-item mb-4 relative"><a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">blocks</a></li>
                    <li class="side-nav-item mb-4 relative">
                        <span class="fa fa-angle-down side-menu-open float-right w-6 h-6 leading-6 text-lg text-center rounded hover:bg-gray-700 cursor-pointer"></span>
                        <a href="#" class="text-sms hover:text-secondary ease-in-out duration-300">Elements</a>
                        <ul class="side-dropdown-menu hidden p-3 pt-5">
                            <li class="pb-3 hover:text-secondary ease-in-out duration-300">Software/Marketing</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    business
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    corporate
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Digital Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    eBook
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Event/Conference
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Hosting
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Marketing Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Mobile App
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Mobile App 2
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    SaaS
                                </a>
                            </li>
                            <li class="pt-3 pb-3 hover:text-secondary ease-in-out duration-300">Retail/Services</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Auto Service
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Beauty Salon
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Catering
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Dentist
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Gardener
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Hair Salon
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Makeup Artist
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Moving
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Pizza
                                </a>
                            </li>
                            <li class="pt-3 pb-3 hover:text-secondary ease-in-out duration-300">business</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Architecture
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Construction
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Consulting
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Fitness
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Furniture Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Home Decor
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Jewelry Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Lawyer
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Real Estate
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Renewable Energy
                                </a>
                            </li>
                            <li class="pt-3 pb-3 hover:text-secondary ease-in-out duration-300">Personal/Non-profit</li>
                            <li>
                                <a href="#" class="inline-block text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Digital Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    bbPress Forum
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Fashion Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Health Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Travel Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Charity
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    Musical Artist
                                </a>
                            </li>
                            <li>
                                <a href="#" class="inline-block pt-2 text-xs hover:text-secondary ease-in-out duration-300" role="menuitem">
                                    NGO
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="flex justify-center pt-5">
                    <a href="#" class="theme-btn text-sms bg-secondary text-white uppercase font-medium py-5 px-10">
                        <span class="relative z-10">get a quote</span>
                    </a>
                </div>
            </div><!-- end side-menu-wrap -->
        </div><!-- end side-nav-container -->
    </nav>
</header>
  <!-- END HEADER -->
</template>

<script>
export default {
  name: "HeaderSection"
};
</script>
