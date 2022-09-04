<template>
  <div
    class="mx-auto flex max-w-xl rounded-lg border border-light-grayish-blue-200 bg-white drop-shadow-xl"
  >
    <form class="flex w-full flex-col p-20" action="">
      <AtomsBaseInput
        v-model="v$.name.$model"
        placeholder="Name and surname"
        required
        label="Name and surname"
        :v="v$.name"
        class="mb-4"
      />
      <AtomsBaseInput
        v-model="v$.name.$model"
        placeholder="Name and surname"
        required
        label="Name and surname"
        :v="v$.name"
        class="mb-4"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

interface Event {
  id: string
  name: string
  street: string
  city: string
  postcode: string
  additional_info: string
  date: string
  updated_at: string
}

const { data: currentEvent } = await useFetch<Event>(
  () => import.meta.env.VITE_API_URL + `/event`,
  { pick: ['id'] }
)
console.log(currentEvent.value)
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

// const handleSubmit = async () => {
//   v$.value.$touch()

//   // if (notsubimitted) {
//   //   return
//   // }
//   const data = await $fetch(import.meta.env.VITE_API_URL + `/subscribe`, {
//     method: 'POST',
//     body: {
//       name: state.name,
//       email: state.email,
//       event_id: currentEvent.value,
//       company: state.company,
//       phone: state.phone,
//     },
//   })
//   console.log(data)
// }
</script>
