<template>
  <section class="relative bg-light-grayish-blue-100 pt-24 pb-24">
    <div
      class="container mx-auto flex max-w-screen-xl items-center justify-center px-4"
    >
      <div class="max-w-xl text-center">
        <div class="flex justify-center">
          <nuxt-icon
            name="noun-paper-plane"
            class="icon-mail mb-6 flex"
          ></nuxt-icon>
        </div>
        <h2 class="mb-10">Join our community!</h2>
        <p class="mb-12 text-lg">
          Every month we will send you news in the beauty industry, marketing
          and PR tips and the latest information about our awards.
        </p>
        <transition mode="out-in" name="slide-up">
          <div v-if="isSent" class="flex flex-col items-center justify-center">
            <div
              class="mx-auto inline-flex flex-row items-center justify-center py-3 px-6 text-base md:text-xl"
            >
              <nuxt-icon name="check-circle" filled class="icon-check mr-4" />
              Thank You for subscribing!
            </div>
          </div>
          <form v-else @submit.prevent="subscribe">
            <div class="flex flex-row items-start">
              <AtomsBaseInput
                v-model="v$.email.$model"
                placeholder="user@email.com"
                icon="mail"
                class="w-full"
                :v="v$.email"
              />
              <button
                class="ml-5 inline-flex items-center justify-center rounded-md border border-dark-golden bg-dark-golden px-10 py-2.5 text-center text-base font-medium text-white hover:bg-dark-golden/95"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </transition>
        <transition name="slide-up">
          <div
            v-if="isError"
            class="flex items-center justify-center rounded-md bg-red-100"
          >
            <div
              class="mx-auto inline-flex flex-row items-center justify-center py-6 px-6 text-base text-red-600 md:text-xl"
            >
              <nuxt-icon name="x" filled class="mr-2 text-red-600" />
              Something went wrong :( Please try again later.
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailV } from '@vuelidate/validators'

const isError = ref(false)
const isSent = ref(false)
const email = ref('')
const rules = computed(() => ({
  email: {
    required,
    emailV,
  },
}))

const v$ = useVuelidate(rules, { email })

const subscribe = async () => {
  v$.value.$touch()
  if (v$.value.$invalid) {
    return
  }
  await $fetch(import.meta.env.VITE_API_URL + `/subscribe`, {
    method: 'POST',
    body: {
      email: email.value,
    },
  })
    .then(() => {
      isSent.value = true
    })
    .catch((err) => {
      console.error(err)
      isError.value = true
    })
}
</script>

<style scoped>
.icon-mail {
  width: 96px;
  height: 96px;
}
.icon-check {
  color: var(--dark-golden);
  width: 48px !important;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
