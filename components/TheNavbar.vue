<template>
  <header class="fixed z-30 w-full bg-white">
    <div class="container mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="flex items-center justify-between py-6 lg:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link to="/" class="items-center justify-center">
            <span class="sr-only">Beauty Kingdom Logo</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/images/Slice.svg"
              width="64"
              height="40"
              alt="Beauty Kingdom short logo"
            />
          </nuxt-link>
        </div>

        <nav
          :class="[
            'sidenav fixed right-0 bottom-0 top-0 z-20 px-6 lg:hidden',
            { open },
          ]"
        >
          <div class="flex py-6">
            <button
              type="button"
              class="ml-auto inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="open = false"
            >
              <span class="sr-only">Close menu</span>
              <nuxt-icon
                name="x"
                filled
                class="flex h-5 w-5 items-center justify-center"
              />
            </button>
          </div>
          <ul :class="{ flex: open, hidden: !open }" class="flex-col">
            <li v-for="link in links" :key="link.name">
              <button
                type="button"
                class="my-3 flex w-full justify-center rounded-md px-6 py-3 text-base font-medium hover:bg-light-grayish-blue-100 hover:text-dark-golden"
                @click="'/' + navigate(link.href)"
              >
                {{ link.name }}
              </button>
            </li>
            <li>
              <button
                type="button"
                class="my-3 flex w-full items-center justify-center rounded-md bg-royal-blue px-10 py-3 text-center text-base font-medium text-white hover:bg-yale-blue"
                @click="navigate('/register')"
              >
                Register
              </button>
            </li>
          </ul>
        </nav>
        <!-- desktop menu -->
        <div class="ml-auto flex">
          <div class="lg:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="open = true"
            >
              <span class="sr-only">Open menu</span>
              <nuxt-icon
                name="menu"
                filled
                class="flex h-5 w-5 items-center justify-center"
              />
            </button>
          </div>
          <div class="hidden items-center justify-center space-x-2 lg:flex">
            <nuxt-link
              v-for="link in links"
              :key="link.name"
              :to="'/' + link.href"
              class="rounded-md px-5 py-2 text-base font-medium hover:bg-light-grayish-blue-100 hover:text-dark-golden"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
          <div class="hidden items-center lg:flex">
            <nuxt-link
              to="/register"
              class="ml-5 inline-flex items-center justify-center rounded-md bg-royal-blue px-5 py-2 text-center text-base font-medium text-white hover:bg-yale-blue"
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
const router = useRouter()
const navigate = (route) => {
  router.push(route)
  open.value = false
}
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
    name: 'Sponsors',
    href: 'sponsors',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
]
const open = ref(false)
</script>

<style scoped>
.sidenav {
  @apply flex-col bg-white;

  transform: translateX(100%);
  transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  min-width: 100%;

  /* width: 100%; */

  /* @screen sm {
    min-width: 24rem;
  } */
}

.sidenav.open {
  transform: translateX(0);
}

.sidenav-menu {
  @apply flex-grow px-4 pb-4;

  /* @screen md {
    @apply block overflow-y-auto pb-0;
  } */
}
</style>
