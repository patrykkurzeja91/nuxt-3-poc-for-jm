<template>
  <section class="relative bg-new-gray pt-48 pb-24">
    <div class="custom-shape-divider-top-1663530825">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div
      class="flex container mx-auto max-w-screen-xl items-center justify-center px-4"
    >
      <form class="max-w-xl text-center" @submit.prevent="subscribe">
        <div class="flex justify-center">
          <nuxt-icon name="noun-paper-plane" class="w-1/3"></nuxt-icon>
        </div>
        <h2 class="mb-10">Join our newsletter today!</h2>
        <p class="mb-12 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor libero
          nihil debitis facere vero rerum quos totam cupiditate. Cupiditate sit
          similique id in harum incidunt nemo praesentium? Nisi, quo harum!
        </p>
        <div class="flex flex-row items-start">
          <AtomsBaseInput
            v-model="v$.email.$model"
            placeholder="user@email.com"
            icon="mail"
            class="w-full"
            :v="v$.email"
          />
          <button
            class="ml-6 inline-flex items-center justify-center rounded-md border border-royal-blue bg-royal-blue px-10 py-2.5 text-center text-base font-medium text-white hover:bg-yale-blue"
            type="submit"
          >
            Submit
          </button>
          <!-- <button class="items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-royal-blue hover:bg-indigo-700">Subscribe</button> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailV } from '@vuelidate/validators'

const subscriptionErrorMessage = ref('')
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
    subscriptionErrorMessage.value = 'Cannot send message'
    return
  }
  const data = await $fetch(import.meta.env.VITE_API_URL + `/subscribe`, {
    method: 'POST',
    body: {
      firstname: 'Don',
      lastname: 'Juan',
      email: email.value,
    },
  })
  console.log(data)
}
</script>

<style scoped>
.custom-shape-divider-top-1663530825 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1663530825 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 90px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1663530825 .shape-fill {
  fill: #002366;
}
</style>
