<template>
  <section class="">
    <div
      class="container mx-auto flex max-w-screen-lg flex-col items-center justify-center px-5 pb-24 pt-20"
    >
      <img
        class="mb-16 w-5/6 rounded object-cover object-center md:w-4/6 lg:w-4/6"
        alt="hero"
        src="@/assets/images/bk_logo-gold.png"
      />
      <!-- <img class="lg:w-4/6 md:w-4/6 w-5/6 mb-6 object-cover object-center rounded" alt="hero" src="@/assets/images/bk_logo-blue.png"> -->
      <div class="w-full text-center lg:w-2/3">
        <!-- <h1 class="mb-4">B | K Beauty Kingdom Awards</h1> -->
        <p class="mb-10 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, sed
          atque quae praesentium qui labore enim doloremque animi cumque
          reprehenderit. Eius, nobis voluptate? Ab dolor molestias ullam
          distinctio hic excepturi.
        </p>
        <div class="flex justify-center">
          <nuxt-link
            href="register"
            class="mr-6 inline-flex items-center justify-center rounded-md bg-royal-blue px-10 py-3 text-center text-base font-medium text-white hover:bg-yale-blue"
          >
            Register now
            <svg
              class="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </nuxt-link>
          <nuxt-link
            href="contact"
            class="inline-flex items-center justify-center rounded-md border border-royal-blue px-10 py-3 text-center text-base font-medium text-gray-900 hover:bg-new-gray"
          >
            Contact us
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
