<template>
  <div class="flex mx-auto max-w-xl">
    <form
      class="flex w-full flex-col md:px-20 md:py-20"
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
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import type { Ticket } from '@/types'

const { data: currentEvent } = await useFetch<Ticket>(
  () => import.meta.env.VITE_API_URL + `/event`,
  { pick: ['id'] }
)

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
  const valid = v$.value.$validate()

  if (!valid) {
    return
  }
  const data = await $fetch(import.meta.env.VITE_API_URL + `/ticket/buy`, {
    method: 'POST',
    body: {
      name: state.name,
      email: state.email,
      event_id: currentEvent.value?.id,
      company: state.company,
      phone: state.phone,
    },
  })
  console.log(data)
}
</script>
