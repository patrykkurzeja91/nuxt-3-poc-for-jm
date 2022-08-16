<template>
  <section class=" py-24 bg-new-gray ">
  <div class="max-w-screen-xl container px-4 mx-auto flex items-center justify-center">
    <form class="max-w-xl text-center">
      <h2 class="mb-10">
      Check out our newsletter today!
      </h2>
      <p class=" text-lg mb-12">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor libero nihil debitis facere vero rerum quos totam cupiditate. Cupiditate sit similique id in harum incidunt nemo praesentium? Nisi, quo harum!
      </p>
      <div class="flex flex-row items-center">
      <AtomsBaseInput
        class="w-full"
        v-model="email"
      />
      {{email}}
      <a href="#" class="inline-flex items-center justify-center px-10 py-2 ml-6 text-base font-medium text-center text-white rounded-sm bg-royal-blue hover:bg-yale-blue">
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
