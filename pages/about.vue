<template>
  <div>
    <section class="relative overflow-x-hidden">
      <div class="container mx-auto px-5 py-24">
        <div class="flex w-full flex-col text-center">
          <h1 class="heading mb-16 text-dark-golden">
            We’re so glad you’re here!
          </h1>
          <p class="mx-auto text-lg lg:w-2/3">
            We started Beauty Kingdom Awards to support other people in the
            beauty industry. Successful like you.
          </p>
        </div>
      </div>
    </section>
    <MoleculesTwoColumnSectionLeft />
    <MoleculesTwoColumnSectionRight />
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'About us',
})
</script>
