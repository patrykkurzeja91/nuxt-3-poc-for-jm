<script lang="ts" setup>
const helpItems = ref([
  'Helping children to develop their talents and abilities',
  'Helping children in their education',
  'Helping children and their families in crisis',
  'Providing children with courses, trainings, workshops',
  'Cultural and educational exchange',
  'Providing comprehensive facilities (building schools, providing accommodation, food, clothing, medical assistance etc.) for children in regions and countries affected by extreme poverty, war or other natural disasters',
])
</script>

<template>
  <section class="relative bg-light-grayish-blue-100 pt-48 pb-24">
    <div class="custom-shape-divider-top-1663530825">
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
    <div class="container mx-auto max-w-screen-lg px-5">
      <div class="relative pb-12 font-bold">
        <h2 class="heading--5 relative flex justify-center">
          TAKE PART IN LOTTERY
        </h2>
      </div>
      <div class="flex flex-col md:flex-row">
        <div
          class="object-fit mx-auto mb-12 w-3/4 overflow-hidden md:mr-12 md:mb-0 md:w-3/4"
        >
          <img
            src="@/assets/images/feetchar.jpg"
            width="468"
            height="312"
            loading="lazy"
            class="object-fit h-auto w-full rounded-md"
            alt="man from charity organization helping children"
          />
        </div>
        <div class="md:w-3/4">
          <p class="mb-6 text-lg font-bold">
            We have been supporting charity campaigns for years, because we know
            that there are people or institutions that need our support.
          </p>
          <p>
            We at Little Feet truly believe that ordinary people can make an
            extraordinary difference. Moreover, our lives in the West are full
            of abundance and prosperity; we have a moral obligation to share the
            wealth with those in need. It is our duty as people of the world to
            ensure that there are no more homeless children.
          </p>
        </div>
      </div>
      <div class="mt-10 flex flex-col md:flex-row">
        <div class="">
          <p class="mb-6 text-lg">
            <span class="font-semibold uppercase">Our mission statement</span>
            - Comprehensive assistance to children in difficult or desperate
            situations:
          </p>

          <div class="mb-4">
            <span
              v-for="(item, index) in helpItems"
              :key="index"
              class="mr-4 border-l-4 border-dark-golden pl-2"
            >
              {{ item }}
            </span>
          </div>
          <p class="mb-1">Charity Number : 1170055</p>
          <p>info@little-feet.org.uk</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-shape-divider-top-1663530825 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1663530825 svg {
  position: relative;
  display: block;
  width: calc(100% + 2px);
  height: 90px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1663530825 .shape-fill {
  fill: #002366;
}
</style>
