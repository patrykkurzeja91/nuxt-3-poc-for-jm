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
import { required } from '@vuelidate/validators'

const state = ref({
  name: '',
})
const rules = {
  name: { required }, // Matches state.firstName
  // lastName: { required }, // Matches state.lastName
  // contact: {
  //   email: { required, email } // Matches state.contact.email
  // }
}
const v$ = useVuelidate(rules, state)
</script>
