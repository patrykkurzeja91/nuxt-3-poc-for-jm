<template>
  <footer class="bg-royal-blue py-24">
    <div class="container mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="md:flex md:justify-between">
        <div
          class="mb-20 flex items-center justify-center md:mb-0 md:items-start"
        >
          <nuxt-link to="/" class="flex items-center text-white">
            <img
              width="220"
              height="96"
              loading="lazy"
              src="@/assets/images/bk-awards-full-logo.svg"
              class="mr-3 h-24 text-white"
              alt="Beauty kingdom awards Logo"
            />
          </nuxt-link>
        </div>
        <div
          class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
        >
          <div>
            <p class="mb-6 text-lg font-bold uppercase text-white">Resources</p>
            <ul class="dark:light-grayish-blue-600 text-light-grayish-blue-400">
              <li>
                <nuxt-link href="/register" class="hover:underline">
                  Register a nominee
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <p
              class="mb-6 text-lg font-bold uppercase text-white dark:text-white"
            >
              Links
            </p>
            <ul class="text-light-grayish-blue-400">
              <li v-for="link in links" :key="link.name" class="mb-4">
                <nuxt-link :href="'/' + link.href" class="hover:underline">{{
                  link.name
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-whit mb-6 text-lg font-bold uppercase text-white">
              Legal
            </p>
            <ul class="text-light-grayish-blue-400">
              <li class="mb-4">
                <nuxt-link to="/privacy" class="hover:underline"
                  >Privacy Policy</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/terms-and-conditions" class="hover:underline"
                  >Terms &amp; Conditions</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-light-grayish-blue-700 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-lg text-light-grayish-blue-700 sm:text-center"
          >© {{ currentYear }} Beauty Kingdom Awards™. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  {
    name: 'About us',
    href: 'about',
  },
  {
    name: 'Categories',
    href: 'categories',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
  {
    name: 'Sponsors',
    href: 'sponsors',
  },
]
const currentYear = computed(() => new Date().getFullYear())
</script>
