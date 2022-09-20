<template>
  <section class="flex relative overflow-x-hidden bg-white">
    <div class="container mx-auto px-5 py-24">
      <div class="flex mb-20 w-full flex-col text-center">
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
      <div class="flex py-16">Payment icons - visa, mastercard etc</div>
    </div>
  </section>
</template>
