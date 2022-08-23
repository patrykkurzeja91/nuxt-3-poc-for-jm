<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="fixed z-10 w-full bg-white">
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
        <div class="flex ml-auto">
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
              to="about"
              class="px-6 py-3 text-base font-medium hover:bg-new-gray hover:text-dark-golden"
            >
              About us
            </nuxt-link>
            <nuxt-link
              to="categories"
              class="px-6 py-3 text-base font-medium hover:bg-new-gray hover:text-dark-golden"
            >
              Categories</nuxt-link
            >
            <nuxt-link
              to="contact"
              class="px-6 py-3 text-base font-medium hover:bg-new-gray hover:text-dark-golden"
            >
              Contact</nuxt-link
            >
            <nuxt-link
              to="sponsors"
              class="px-6 py-3 text-base font-medium hover:bg-new-gray hover:text-dark-golden"
            >
              Sponsors
            </nuxt-link>
          </div>
          <div class="hidden items-center md:flex">
            <nuxt-link
              to="register"
              class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-royal-blue px-10 py-3 text-base font-medium text-white hover:shadow-sm hover:shadow-dark-golden"
            >
              Register
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div>
              <a
                href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition> -->
  </header>
</template>

<script setup>
// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

// const solutions = [
//   {
//     name: 'Analytics',
//     description:
//       'Get a better understanding of where your traffic is coming from.',
//     href: '#',
//   },
//   {
//     name: 'Engagement',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     href: '#',
//   },
//   {
//     name: 'Security',
//     description: "Your customers' data will be safe and secure.",
//     href: '#',
//   },
//   {
//     name: 'Integrations',
//     description: "Connect with third-party tools that you're already using.",
//     href: '#',
//   },
//   {
//     name: 'Automations',
//     description:
//       'Build strategic funnels that will drive your customers to convert',
//     href: '#',
//   },
// ]

// const resources = [
//   {
//     name: 'Help Center',
//     description:
//       'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//   },
//   {
//     name: 'Guides',
//     description:
//       'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//   },
//   {
//     name: 'Events',
//     description:
//       'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//   },
//   {
//     name: 'Security',
//     description: 'Understand how we take your privacy seriously.',
//     href: '#',
//   },
// ]
</script>
