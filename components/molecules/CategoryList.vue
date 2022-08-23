<script setup lang="ts">
const categories = ref([
  {
    id: 1,
    name: 'Beauty Salon of the Year',
  },
  {
    id: 2,
    name: 'New Beauty Salon of the Year',
  },
  {
    id: 3,
    name: 'Beauty Therapist of the Year',
  },
  {
    id: 4,
    name: 'Aesthetic Clinic of the Year',
  },
  {
    id: 5,
    name: 'Aesthetic Practicioner of the Year',
  },
  {
    id: 6,
    name: 'Semi Pernament Artis of the Year',
  },
  {
    id: 7,
    name: 'Make Up Artist of the Year',
  },
  {
    id: 8,
    name: 'Nail Salon of the Yyear',
  },
  {
    id: 9,
    name: 'Lashes and Brown Salon of the Year',
  },
  {
    id: 10,
    name: 'Lash Expert of the Year',
  },
  {
    id: 11,
    name: 'Nail Stylist od the Year',
  },
  {
    id: 12,
    name: 'Mobile Beauty Therpaist of the Year',
  },
  {
    id: 13,
    name: 'Spa of the Year',
  },
  {
    id: 14,
    name: 'Massage clinic of the year',
  },
  {
    id: 15,
    name: 'Hair Salon Award',
  },
  {
    id: 16,
    name: 'Barber Award',
  },
  {
    id: 17,
    name: 'Hairdresser Award',
  },
  {
    id: 18,
    name: 'Hair Extension Award',
  },
  {
    id: 19,
    name: 'Hair Treatment Award',
  },
  {
    id: 20,
    name: 'Sun bed Award',
  },
  {
    id: 21,
    name: 'Training Academy Award',
  },
  {
    id: 22,
    name: 'Educator Award',
  },
  {
    id: 23,
    name: 'Influencer Award',
  },
  {
    id: 24,
    name: 'Marketing Agency Award',
  },
  {
    id: 25,
    name: 'Social Media Award',
  },
  {
    id: 26,
    name: 'Media Award',
  },
  {
    id: 27,
    name: 'Innovation in Beauty Award',
  },
  {
    id: 28,
    name: 'Divice Award',
  },
  {
    id: 29,
    name: 'Beauty fair and conference organizer Award',
  },
  {
    id: 30,
    name: 'Best Cosmetic',
  },
  {
    id: 31,
    name: 'Best Vegan Cosmetic',
  },
  {
    id: 32,
    name: 'Best Profesionall Cosmetic',
  },
  {
    id: 33,
    name: 'Best Home skin care cosmetic',
  },
  {
    id: 34,
    name: 'Best Innovation Face cosmetic',
  },
  {
    id: 35,
    name: 'Best New Brand',
  },
  {
    id: 36,
    name: 'Top Hair product',
  },
  {
    id: 37,
    name: 'Top CBD product',
  },
  {
    id: 38,
    name: 'Top Injection Product',
  },
  {
    id: 39,
    name: 'Top professional business',
  },
  {
    id: 40,
    name: 'Top Tatoo Salon',
  },
])
</script>

<template>
  <section class="relative overflow-x-hidden">
    <AtomsBackgroundPatternWave
      class="absolute bottom-0 left-0 right-0 -z-10 w-screen"
    />
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="mb-12">Categories</h1>
        <p class="mx-auto lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <!-- <nuxt-icon
        name="undraw-barber"
        fill
        class="absolute right-0 -z-10 w-full opacity-20"
      /> -->
      <div class="z-10 -m-2 flex flex-wrap">
        <div
          v-for="category in categories"
          :key="category.id"
          class="w-full p-3 md:w-1/2 lg:w-1/3"
        >
          <div
            class="card relative flex h-full flex-col items-start justify-start rounded-xl bg-white/80 p-6 drop-shadow-2xl backdrop-blur-sm"
          >
            <h6
              class="title-font mb-3 mr-4 text-5xl font-medium text-dark-golden/30"
            >
              {{ category.id }}
            </h6>
            <h3 class="z-10 text-2xl text-gray-500">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pattern {
  /*  background-color: white;
  opacity: 0.8;
  background-image: radial-gradient(var(--platinum) 3px, white 3px);
  background-size: 10px 10px; */
}
</style>
