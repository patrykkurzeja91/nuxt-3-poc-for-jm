<script lang="ts" setup>
const linkCards = [
  {
    icon: 'benefit-brand-identity',
    label:
      'Increasing brand awareness among new recipients and potential customers',
    // image: 'https://picsum.photos/300/300',
  },
  {
    icon: 'benefit-trust',
    label: 'Building brand credibility, trust and loyalty among consumers',
    // image: 'https://picsum.photos/300/310',
  },
  {
    icon: 'benefit-collaboration',
    label:
      'Industry recognition and new collaboration opportunities with other high-quality brands',
    // image: 'https://picsum.photos/300/320',
  },
  {
    icon: 'benefit-success',
    label: 'Stand out from the competition - there is only one winner',
    // image: 'https://picsum.photos/305/320',
  },
  {
    icon: 'benefit-growth',
    label: 'Increasing the sale of your products or services',
    // image: 'https://picsum.photos/305/320',
  },
  {
    icon: 'benefit-coaching',
    label:
      'Presentation of the company during the final gala with media partners',
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
      alt="background abstract pattern"
      class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-10"
    />
    <div class="container mx-auto max-w-screen-lg px-5 pb-32 pt-64">
      <div
        class="mx-auto mb-20 flex w-full max-w-screen-md flex-col flex-wrap items-center text-center"
      >
        <h2 class="heading--2 mb-10">
          Find out about the benefits of entering the competition
        </h2>
        <p class="mb-20 text-lg">
          Close your eyes and imagine that you are hearing that you are the
          winner of your category ...is probably one of the most exciting
          messages a brand, product or company can hear.
        </p>
        <p class="text-lg">
          An invitation to the final gala and winning is a huge success for your
          brand and benefits
        </p>
      </div>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="card in linkCards" :key="card.label" class="flex w-full">
          <div
            class="relative block w-full overflow-hidden rounded-md bg-white p-8 text-black"
          >
            <!-- <img :src="`@/assets/icons/${card.icon}.svg`" alt="" /> -->
            <nuxt-icon :name="card.icon" class="icon mb-8 text-dark-golden" />
            <p class="text-lg">
              {{ card.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.icon {
  display: flex;
  width: 64px;
  height: 64px;
}
.icon svg {
  /* stroke-width: 3px; */
  /* width: 48px;
  height: 48px; */
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
  fill: var(--white);
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
