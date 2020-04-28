<template>
 <section class="footer-area text-tiny">
    <div class="container">
        <div class="footer-top-bar border-b border-gray-300 py-6 mb-12">
            <div class="lg:flex flex-wrap">
                <div class="lg:w-9/12 md:w-full">
                    <div class="footer-menu-container">
                        <ul class="main-dropdown flex items-center font-normal">
                            <li><a href="#" class="text-ternary pb-1 mr-8 hover:text-secondary ease-in-out duration-300">About</a></li>
                            <li><a href="#" class="text-ternary pb-1 mr-8 hover:text-secondary ease-in-out duration-300">Disclaimer</a></li>
                            <li><a href="#" class="text-ternary pb-1 mr-8 hover:text-secondary ease-in-out duration-300">Privacy</a></li>
                            <li><a href="#" class="text-ternary pb-1 mr-8 hover:text-secondary ease-in-out duration-300">Advertise</a></li>
                            <li><a href="#" class="text-ternary pb-1 mr-8 hover:text-secondary ease-in-out duration-300">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lg:w-3/12 md:w-full">
                    <div class="social-profile">
                        <ul class="flex items-center lg:justify-end md:justify-start md:pt-5 sm:pt-5">
                            <li class="text-lg"><a href="#" class="text-gray-500 p-4 hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                            <li class="text-lg"><a href="#" class="text-gray-500 p-4 hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                            <li class="text-lg"><a href="#" class="text-gray-500 p-4 pr-0 hover:text-secondary focus:outline-none ease-in-out duration-300"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- end footer top bar -->
        <div class="footer-bottom-bar text-ternary">
            <div class="flex flex-wrap">
                <div class="lg:w-1/4 md:w-1/2 sm:w-full footer-widget mb-8">
                    <h3 class="text-base font-medium text-primary pb-4">About</h3>
                    <div class="footer-menu-container">
                        <ul class="main-dropdown font-normal">
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Services</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Our shop</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Job opportunities</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Calendar of events</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Location</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 sm:w-full footer-widget mb-8">
                    <h3 class="text-base font-medium text-primary pb-4">Additional links</h3>
                    <div class="footer-menu-container">
                        <ul class="main-dropdown font-normal">
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">About us</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Terms and conditions</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Privacy policy</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">News</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 sm:w-full footer-widget mb-8">
                    <h3 class="text-base font-medium text-primary pb-4">Categories</h3>
                    <div class="footer-menu-container">
                        <ul class="main-dropdown font-normal">
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Garden trends</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Houseplants</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Landscaping</a></li>
                            <li><a href="#" class="inline-block mb-2 hover:text-secondary ease-in-out duration-300">Plant care</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 sm:w-full footer-widget mb-8">
                    <h3 class="text-base font-medium text-primary pb-4">Ekko</h3>
                    <p class="leading-7">Making a positive first impression is essential to developing a strong customer relationship. Ekko is powerful enough to assist any small businesses.</p>
                </div>
            </div>
        </div>
        <!-- end footer bottom bar -->
    </div><!-- container -->
    <div class="footer-copyright border-t border-gray-300 py-6 text-center">
        <p class="text-ternary">Ekko by KeyDesign. All rights reserved.</p>
    </div>
</section>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    content: {
      type: Object
    }
  },
};
</script>
