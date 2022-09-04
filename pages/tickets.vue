<template>
  <section class="relative overflow-x-hidden bg-white">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="mb-12">Register for event</h1>

        <p class="mx-auto mb-10 lg:w-2/3">
          Finalists will receive an invitation to the Gala Diner, which will be
          held in March 2023 in London.
        </p>
        <p class="mx-auto mb-10 lg:w-2/3">
          Each finalist will be able to buy a ticket for the final gala.
        </p>
        <p class="mx-auto mb-10 lg:w-2/3">
          You make a secure payment through the payment gateway. To nominate a
          company, please complete the form below
        </p>
      </div>
      <TicketsForm />
      <!-- <nuxt-icon
        name="undraw-barber"
        fill
        class="absolute right-0 -z-10 w-full opacity-20"
      /> -->
      <div class="z-10 -m-2 flex flex-wrap"></div>
    </div>
  </section>
</template>
