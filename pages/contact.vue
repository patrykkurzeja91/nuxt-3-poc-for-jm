<script setup>
const contactList = ref([
  {
    label: 'contact@beautykingdomawards.co.uk',
    link: 'mailto:contact@beautykingdomawards.co.uk',
    icon: 'mail',
  },
  {
    label: '07442947306',
    link: 'callto:07442947306',
    icon: 'phone',
  },
  {
    label: '27 Errington Road, S2 2EF Sheffield, South Yorkshire',
    link: 'https://goo.gl/maps/FfaYHCp5KDTMY9286',
    icon: 'map-pin',
  },
])
const marketingList = ref([
  {
    label: 'Elwira Tokaruk',
    icon: 'user',
  },
  {
    label: 'info@etmarketingsolutions.co.uk',
    link: 'mailto:info@etmarketingsolutions.co.uk',
    icon: 'mail',
  },
])
</script>

<template>
  <div>
    <section class="relative">
      <div class="container mx-auto px-6 py-24">
        <div class="flex mb-20 w-full flex-col text-left">
          <h1 class="heading mb-16 text-center text-dark-golden">Contact us</h1>
        </div>
        <div class="flex flex-col gap-x-16 lg:flex-row">
          <div
            class="flex mx-auto mb-12 w-full flex-col rounded-lg bg-white lg:w-3/4 lg:p-16 lg:drop-shadow-2xl lg:backdrop-blur-md xl:w-1/2"
          >
            <div class="contact-info">
              <h4 class="mb-6 px-6 text-left">Beauty Kingdom Awards</h4>
              <div class="flex flex-col justify-start">
                <a
                  v-for="contact in contactList"
                  :key="contact.label"
                  class="item mb-4 inline-flex flex-col items-start justify-start rounded-md py-3 px-6 text-base hover:bg-light-grayish-blue-100 hover:text-dark-golden md:flex-row md:text-lg lg:items-center"
                  :href="contact.link"
                >
                  <nuxt-icon
                    :name="contact.icon"
                    filled
                    class="icon mr-6 mb-3 md:mb-0"
                  />
                  {{ contact.label }}</a
                >
              </div>
            </div>
          </div>
          <div
            class="flex mx-auto mb-12 w-full flex-col rounded-lg bg-white lg:w-3/4 lg:p-16 lg:drop-shadow-2xl lg:backdrop-blur-md xl:w-1/2"
          >
            <div class="contact-info">
              <h4 class="mb-6 px-6 text-left">Marketing PR</h4>
              <div class="flex flex-col justify-start">
                <component
                  :is="contact.link ? 'a' : 'span'"
                  v-for="contact in marketingList"
                  :key="contact.label"
                  class="item mb-4 inline-flex flex-col items-start justify-start rounded-md py-3 px-6 text-base md:flex-row md:text-lg lg:items-center"
                  :class="
                    contact.link
                      ? 'hover:bg-light-grayish-blue-100 hover:text-dark-golden'
                      : ''
                  "
                  :href="contact.link"
                >
                  <nuxt-icon
                    :name="contact.icon"
                    filled
                    class="icon mr-6 mb-3 md:mb-0"
                  />
                  {{ contact.label }}</component
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.item {
  word-wrap: break-word;
  word-break: break-word;
}
.contact-info > .item:last-of-type {
  margin-bottom: 0 !important;
}
.icon svg {
  width: 36px;
  height: 36px;
}
</style>
