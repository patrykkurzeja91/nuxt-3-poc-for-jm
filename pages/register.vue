<template>
  <section class="relative overflow-x-hidden bg-white">
    <!-- <AtomsBackgroundPatternWave
      class="absolute bottom-0 left-0 right-0 -z-10 w-screen"
    /> -->
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="heading mb-16">Register for event</h1>

        <p class="mx-auto mb-10 lg:w-2/3">
          A company from the Beauty industry may submit an interest in the
          contest.
        </p>
        <p class="mx-auto mb-10 lg:w-2/3">
          The registration fee is £150 per category. You can apply to more than
          one category. The fee for 2 categories is £260 Your data will not be
          passed on without your consent.
        </p>
        <p class="mx-auto mb-10 lg:w-2/3">
          You make a secure payment through the payment gateway. To nominate a
          company, please complete the form below
        </p>
      </div>
      <RegisterForm />
      <!-- <nuxt-icon
        name="undraw-barber"
        fill
        class="absolute right-0 -z-10 w-full opacity-20"
      /> -->
      <div class="z-10 -m-2 flex flex-wrap"></div>
    </div>
  </section>
</template>
