<script setup>
const contactList = ref([
  {
    label: 'contact@beautykingdomawards.co.uk',
    link: 'mailto:contact@beautykingdomawards.co.uk',
    icon: 'mail',
  },
  {
    label: '3334412 123 312',
    link: 'callto:3334412 123 312',
    icon: 'phone',
  },
  {
    label: '399 High St, Lincoln LN5 7SS',
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
      <div class="container mx-auto px-6 py-4 lg:py-24">
        <div
          class="flex mx-auto mb-12 w-full flex-col rounded-md text-center md:w-2/3 lg:border lg:border-light-grayish-blue-200 lg:p-16"
        >
          <div class="contact-info">
            <h1 class="mb-12">Contact us</h1>
            <div class="flex flex-col justify-center">
              <a
                v-for="contact in contactList"
                :key="contact.label"
                class="item mb-4 inline-flex flex-col items-center justify-center rounded-md py-3 px-6 text-lg hover:bg-light-grayish-blue-100 hover:text-dark-golden md:flex-row"
                :href="contact.link"
              >
                <nuxt-icon
                  :name="contact.icon"
                  fill
                  class="icon mr-6 mb-3 lg:mb-0"
                />

                {{ contact.label }}</a
              >
            </div>
          </div>
          <hr class="border-1 my-16 border-light-grayish-blue-100" />
          <div class="contact-info">
            <h4 class="mb-6">Marketing PR</h4>
            <div class="flex flex-col justify-center">
              <component
                :is="contact.link ? 'a' : 'span'"
                v-for="contact in marketingList"
                :key="contact.label"
                class="item mb-4 inline-flex flex-col items-center justify-center rounded-md py-3 px-6 text-lg md:flex-row"
                :class="
                  contact.link
                    ? 'hover:bg-light-grayish-blue-100 hover:text-dark-golden '
                    : ''
                "
                :href="contact.link"
              >
                <nuxt-icon
                  :name="contact.icon"
                  fill
                  class="icon mr-6 mb-3 lg:mb-0"
                />

                {{ contact.label }}</component
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.item {
  word-wrap: break-word;
  word-break: break-word;
}
.contact-info > .item:last-of-type {
  margin-bottom: 0 !important;
}
.icon {
  /*  display: inline-flex;
  justify-content: center;
  align-items: center; */
}
.icon svg {
  width: 36px;
  height: 36px;
}
</style>
