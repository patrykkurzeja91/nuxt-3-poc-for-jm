<template>
  <section class="body-font relative">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-12 flex w-full flex-col text-center">
        <h1 class="heading mb-16 text-dark-golden">Contact Us</h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </div>
      <form class="mx-auto md:w-2/3 lg:w-1/2">
        <div class="flex flex-wrap">
          <div class="w-1/2 p-2">
            <div class="relative">
              <label for="name" class="text-sm leading-7 text-gray-600"
                >Name</label
              >
              <input
                id="name"
                type="text"
                name="name"
                class="w-full rounded border border-gray-300 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
          <div class="w-1/2 p-2">
            <div class="relative">
              <label for="email" class="text-sm leading-7 text-gray-600"
                >Email</label
              >
              <input
                id="email"
                type="email"
                name="email"
                class="w-full rounded border border-gray-300 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
          <div class="w-full p-2">
            <div class="relative">
              <label for="message" class="text-sm leading-7 text-gray-600"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                class="h-32 w-full resize-none rounded border border-gray-300 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              ></textarea>
            </div>
          </div>
          <div class="w-full p-2">
            <button
              class="mx-auto flex rounded border-0 bg-blue-500 py-2 px-8 text-lg text-white hover:bg-blue-600 focus:outline-none"
            >
              Button
            </button>
          </div>
          <div
            class="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center"
          >
            <a class="text-blue-500">example@email.com</a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
