<template>
  <section class="relative flex overflow-x-hidden bg-light-grayish-blue-100">
    <div class="container mx-auto px-5 py-24">
      <div class="flex w-full flex-col text-center">
        <h1 class="heading mb-16 text-dark-golden">
          Develop your dream business with us!
        </h1>

        <ul>
          <li class="mx-auto mb-2 lg:w-2/3">You love your job</li>
          <li class="mx-auto mb-2 lg:w-2/3">You develop your skills</li>
          <li class="mx-auto mb-2 lg:w-2/3">You care about your customers</li>
          <li class="mx-auto mb-10 lg:w-2/3">
            You invest in marketing and PR activities
          </li>
        </ul>
        <p class="mx-auto mb-4 lg:w-2/3">
          We have 40 categories to appreciate companies in the beauty industry!
          You can apply to more than one category.
        </p>
        <p class="mx-auto mb-10 lg:w-2/3">
          Appreciate your work and show your beauty company to the world!
        </p>
        <p class="mx-auto mb-10 font-bold lg:w-2/3">
          The registration fee is £150 per category. You can apply to more than
          one category. The fee for 2 categories is £260 Your data will not be
          passed on without your consent.
        </p>
        <p class="mx-auto mb-4 lg:w-2/3">
          Your data will not be passed on without your consent. You make a
          secure payment through the payment gateway.
        </p>
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
