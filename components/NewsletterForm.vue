<template>
  <section class="bg-new-gray py-24">
    <div
      class="container mx-auto flex max-w-screen-xl items-center justify-center px-4"
    >
      <form class="max-w-xl text-center">
        <h2 class="mb-10">Check out our newsletter today!</h2>
        <p class="mb-12 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor libero
          nihil debitis facere vero rerum quos totam cupiditate. Cupiditate sit
          similique id in harum incidunt nemo praesentium? Nisi, quo harum!
        </p>
        <div class="flex flex-row items-center">
          <AtomsBaseInput v-model="email" class="w-full" />
          {{ email }}
          <a
            href="#"
            class="ml-6 inline-flex items-center justify-center rounded-sm bg-royal-blue px-10 py-2 text-center text-base font-medium text-white hover:bg-yale-blue"
          >
            Submit
          </a>
          <!-- <button class="items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-royal-blue hover:bg-indigo-700">Subscribe</button> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const email = ref('')
</script>
