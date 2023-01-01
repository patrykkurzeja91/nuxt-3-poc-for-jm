<template>
  <div class="flex mx-auto max-w-xl">
    <form
      class="flex w-full flex-col md:px-20 md:py-20"
      novalidate
      @submit.prevent="handleSubmit"
    >
      <AtomsBaseInput
        v-model="v$.name.$model"
        placeholder="Name and surname"
        required
        label="Name and surname"
        :v="v$.name"
      />
      <AtomsBaseInput
        v-model="v$.email.$model"
        placeholder="Your e-mail"
        required
        label="E-mail"
        :v="v$.email"
      />
      <AtomsBaseInput
        v-model="v$.company.$model"
        placeholder="Company name"
        required
        label="Company name"
        :v="v$.company"
      />
      <AtomsBaseInput
        v-model="v$.phone.$model"
        placeholder="Phone number"
        required
        label="Phone number"
        :v="v$.phone"
      />

      <button
        class="mt-8 inline-flex items-center justify-center rounded-md bg-royal-blue px-10 py-3 text-center text-base font-medium text-white hover:bg-yale-blue"
        type="submit"
      >
        Buy a ticket
      </button>
    </form>
    <div
      v-if="showErrorMessage"
      id="toast-warning"
      class="flex fixed bottom-20 right-14 w-full max-w-xs items-center rounded-lg bg-red-100 p-4 text-gray-500 shadow"
      role="alert"
    >
      <div
        class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-200 text-red-600"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Warning icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">Something went wrong</div>
      <button
        class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-gray-300"
        aria-label="Close"
        @click="showErrorMessage = false"
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import type { Ticket } from '@/types'

const { data: currentEvent } = await useFetch<Ticket>(
  () => import.meta.env.VITE_API_URL + `/event`,
  { pick: ['id'] }
)
const showErrorMessage = ref(false)

const state = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
})

const rules = {
  name: { required },
  email: { required, email },
  company: { required },
  phone: { required },
}
const v$ = useVuelidate(rules, state)

const handleSubmit = async () => {
  v$.value.$touch()

  if (!v$.value.$invalid) {
    await axios
      .post(import.meta.env.VITE_API_URL + `/ticket/buy`, {
        name: state.name,
        email: state.email,
        event_id: currentEvent.value?.id,
        company: state.company,
        phone: state.phone,
      })
      .then((response) => (window.location.href = response.data.payment_url))
      .catch((err) => {
        console.log('##err', err)
        showErrorMessage.value = true
      })
  }
}
</script>
