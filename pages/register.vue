<template>
  <section class="relative flex overflow-x-hidden bg-light-grayish-blue-100">
    <div class="container mx-auto px-5 py-24">
      <div class="mx-auto flex w-full flex-col text-center lg:w-2/3">
        <h1 class="heading mb-16 text-dark-golden">
          Develop your dream business with us!
        </h1>

        <ul class="my-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          <li class="flex flex-col items-center justify-start">
            <nuxt-icon name="star" filled class="mb-3 w-8 text-dark-golden" />
            <span>You love your job</span>
          </li>
          <li class="flex flex-col items-center justify-start">
            <nuxt-icon name="star" filled class="mb-3 w-8 text-dark-golden" />

            <span>You develop your skills</span>
          </li>
          <li class="flex flex-col items-center justify-start">
            <nuxt-icon name="star" filled class="mb-3 w-8 text-dark-golden" />

            <span>You care about your customers</span>
          </li>
          <li class="flex flex-col items-center justify-start">
            <nuxt-icon name="star" filled class="mb-3 w-8 text-dark-golden" />

            <span> You invest in marketing and PR activities</span>
          </li>
        </ul>
        <div class="my-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <div class="image rounded-md" />
          <div>
            <p class="mb-4 text-left">
              We have 40 categories to appreciate companies in the beauty
              industry! You can apply to more than one category.
            </p>
            <p class="mb-10 text-left">
              Appreciate your work and show your beauty company to the world!
            </p>
            <p class="mb-10 text-left font-bold">
              The registration fee is £150 per category. You can apply to more
              than one category. The fee for 2 categories is £260
            </p>
          </div>
        </div>
      </div>
      <RegisterForm />
      <!-- <nuxt-icon
        name="undraw-barber"
        fill
        class="absolute right-0 -z-10 w-full opacity-20"
      /> -->
      <div
        class="mx-auto flex max-w-xl shrink-0 flex-wrap items-center justify-center"
      >
        <nuxt-icon name="visa" filled class="mr-6 w-32" />
        <nuxt-icon name="mastercard" filled class="w-32" />
        <nuxt-icon name="stripe" filled class="w-32" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
useHead({
  title: 'Register a nominee',
})
</script>
<style lang="css" scoped>
.image {
  background-image: url('@/assets/images/beauty-salon.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 100%;
}
</style>
