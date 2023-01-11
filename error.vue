<template>
  <section
    class="error-page relative flex items-center justify-center overflow-x-hidden"
  >
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="error-status mb-16">{{ error.statusCode }}</h1>
        <p class="mx-auto text-2xl">
          {{
            error.statusCode === '404'
              ? error.message
              : 'Something went wrong. This is probably our servers.'
          }}
        </p>
      </div>
      <button
        class="mx-auto flex rounded border-0 bg-royal-blue py-2 px-8 text-lg text-white hover:bg-yale-blue focus:outline-none"
        @click="handleError"
      >
        Go back to homepage
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ error: Error & { statusCode: string } }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-page {
  height: 100vh;
}
.error-status {
  font-size: 11rem;
}
@screen md {
  .error-status {
    font-size: 20rem;
  }
}
</style>
