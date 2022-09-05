<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="fixed z-20 w-full bg-white">
    <div class="container mx-auto max-w-screen-xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/" class="items-center justify-center">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/images/Slice.svg"
              alt=""
            />
          </a>
        </div>
        <!-- hamburger button -->
        <div class="ml-auto flex">
          <div class="-my-2 -mr-2 md:hidden">
            <button
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open menu</span>
              <!-- <MenuIcon class="h-6 w-6" aria-hidden="true" /> -->
            </button>
          </div>
          <div class="hidden space-x-2 md:flex">
            <nuxt-link
              v-for="link in links"
              :key="link.name"
              :to="link.href"
              class="rounded-md px-6 py-3 text-base font-medium hover:bg-new-gray hover:text-dark-golden"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
          <div class="hidden items-center md:flex">
            <nuxt-link
              to="register"
              class="ml-6 inline-flex items-center justify-center rounded-md bg-royal-blue px-10 py-3 text-center text-base font-medium text-white hover:bg-yale-blue"
            >
              Register
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
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
  {
    name: 'Tickets',
    href: 'tickets',
  },
]
</script>
