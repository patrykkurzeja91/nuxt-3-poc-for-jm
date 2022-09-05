<template>
  <div
    class="mx-auto flex max-w-xl rounded-lg border border-light-grayish-blue-200 bg-white drop-shadow-xl"
  >
    <form class="flex w-full flex-col p-20" @submit.prevent="handleSubmit">
      <h3 class="mb-4">Personal info</h3>

      <AtomsBaseInput
        v-model="v$.name.$model"
        placeholder="Name and surname"
        required
        label="Full name"
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
        v-model="v$.phone.$model"
        placeholder="Phone number"
        required
        label="Phone"
        :v="v$.phone"
      />
      <AtomsBaseInput
        v-model="v$.city.$model"
        placeholder="city"
        required
        label="City"
        :v="v$.city"
      />
      <AtomsBaseInput
        v-model="v$.street.$model"
        placeholder="street"
        required
        label="Street"
        :v="v$.street"
      />
      <AtomsBaseInput
        v-model="v$.postcode.$model"
        placeholder="postcode"
        required
        label="postcode"
        :v="v$.postcode"
      />
      <AtomsBaseInput
        v-model="state.additional_info"
        placeholder="additional address information"
        label="Additional info"
      />

      <h3 class="mt-6 mb-4">Company info</h3>
      <AtomsBaseInput
        v-model="v$.company.$model"
        placeholder="Company name"
        required
        label="Company name"
        :v="v$.company"
      />
      <AtomsBaseInput
        v-model="v$.established.$model"
        placeholder="established"
        required
        label="Established"
        :v="v$.established"
      />
      <AtomsBaseTextarea
        v-model="v$.socials.$model"
        placeholder="social media profiles"
        required
        maxlength="1000"
        label="Socials"
        :v="v$.socials"
      />
      <AtomsBaseTextarea
        v-model="v$.company_profile.$model"
        placeholder="what company do"
        required
        maxlength="500"
        label="Company profile"
        :v="v$.company_profile"
      />
      <AtomsBaseTextarea
        v-model="v$.achievements.$model"
        placeholder="company achievements"
        required
        maxlength="500"
        label="Achievements"
        :v="v$.achievements"
      />
      <AtomsBaseTextarea
        v-model="v$.publications.$model"
        placeholder="Publications"
        required
        maxlength="500"
        label="Publications"
        :v="v$.publications"
      />
      <AtomsBaseTextarea
        v-model="v$.publications.$model"
        placeholder="Motivation"
        required
        label="Motivation"
        :v="v$.motivation"
      />
      <!-- <VueMultiselect
        v-model="selected"
        track-by="id"
        label="name"
        :options="allCategories"
        multiple
        :close-on-select="false"
      >
      </VueMultiselect> -->
      <VueMultiselect
        v-model="state.selectedCategories"
        group-values="data"
        group-label="subcat"
        track-by="id"
        label="name"
        :options="groupedCategories"
        multiple
        :close-on-select="false"
      >
      </VueMultiselect>

      <button
        class="mt-8 inline-flex items-center justify-center rounded-md bg-royal-blue px-10 py-3 text-center text-base font-medium text-white hover:bg-yale-blue"
        type="submit"
      >
        submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import type { Ticket, Category } from '@/types'
import useGroupedCategories from '~~/composables/useGroupedCategories'
const { data: currentEvent } = await useFetch<Ticket>(
  () => import.meta.env.VITE_API_URL + `/event`,
  { pick: ['id'] }
)
const { data: categories } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`
)
const allCategories = computed(() => categories.value.categories)

const { groupedCategories } = useGroupedCategories(allCategories.value)

const state = reactive({
  name: '',
  street: '',
  city: '',
  postcode: '',
  additional_info: '',
  email: '',
  phone: '',
  company: '',
  established: '',
  socials: '',
  company_profile: '',
  achievements: '',
  publications: '',
  motivation: '',
  selectedCategories: [],
})
const rules = {
  name: { required }, // Matches state.firstName
  email: { required, email },
  postcode: { required },
  street: { required },
  city: { required },
  company: { required },
  phone: { required },
  established: { required },
  socials: { required },
  company_profile: { required },
  achievements: { required },
  publications: { required },
  motivation: { required },
  selectedCategories: { required },
}
const v$ = useVuelidate(rules, state)

const handleSubmit = async () => {
  const valid = v$.value.$validate()

  if (!valid) {
    return
  }
  const res = await $fetch.raw(import.meta.env.VITE_API_URL + `/nominee/buy`, {
    method: 'POST',
    body: {
      name: state.name,
      email: state.email,
      event_id: currentEvent.value.id,
      company: state.company,
      phone: state.phone,
      street: state.street,
      city: state.city,
      postcode: state.postcode,
      additional_info: state.additional_info,
      established: state.established,
      socials: state.socials,
      company_profile: state.company_profile,
      achievements: state.achievements,
      publications: state.publications,
      motivation: state.motivation,
      categories: state.selectedCategories.map((i) => i.id),
    },
  })
  if (!res.ok) {
    return
  }

  window.location.href = res._data.payment_url
}
</script>

<style>
::v-deep(.multiselect__tags) {
  border-radius: 12px;
  background-color: red;
}
.multiselect__tags {
  @apply border-light-grayish-blue-300 !important;
}
.multiselect__tag {
  @apply bg-royal-blue !important;
  /* background: var(--royal-blue-dark) !important; */
}
.multiselect__tag-icon:hover.multiselect__tag-icon::after {
  @apply text-white !important;
}
.multiselect__tag-icon::after {
  @apply text-light-grayish-blue-900 !important;
}
</style>
