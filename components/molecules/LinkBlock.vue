<script lang="ts" setup>
const linkCards = [
  {
    label: 'Register now',
    href: '/register',
    image: 'https://picsum.photos/300/300',
  },
  {
    label: 'Buy a ticket',
    href: '/tickets',
    image: 'https://picsum.photos/300/310',
  },
  {
    label: 'contact us',
    href: '/contact',
    image: 'https://picsum.photos/300/320',
  },
  {
    label: 'Become a sponsor',
    href: '/sponsors',
    // image: 'https://picsum.photos/305/320',
  },
]
</script>
<template>
  <section class="relative bg-royal-blue text-white">
    <div class="custom-shape-divider-top-1663530694">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <img
      src="@/assets/icons/kumiko_pattern.svg"
      class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-10"
    />
    <div class="container mx-auto max-w-screen-lg px-5 pb-32 pt-64">
      <div
        class="flex mb-20 w-full flex-col flex-wrap items-center text-center"
      >
        <h2 class="mb-10">Pitchfork Kickstarter Taxidermy</h2>
      </div>
      <div class="grid gap-5 md:grid-cols-2">
        <div
          v-for="card in linkCards"
          :key="card.label"
          class="flex h-72 w-full"
          @click="$router.push({path: card.href})"
        >
          <div
            class="relative block w-full cursor-pointer overflow-hidden rounded-md p-6"
          >
            <img
              v-if="card.image"
              alt="content"
              class="absolute left-0 top-0 z-0 h-full w-full object-cover object-center"
              :src="card.image"
            />
            <div :class="card.image ? 'overlay' : 'overlay-hard'"></div>
            <div
              class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-royal-blue"
            >
              <!-- <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> -->
            </div>
            <h2 class="title relative z-10 mb-4">
              {{ card.label }}
            </h2>
            <p class="relative z-10 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
      </div>
      <!-- <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> -->
    </div>
  </section>
</template>
<style scoped>
.title {
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
}
.custom-shape-divider-top-1663530694 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1663530694 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 126px;
}

.custom-shape-divider-top-1663530694 .shape-fill {
  fill: #fff;
}

.overlay {
  content: '';
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.overlay-hard {
  content: '';
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
