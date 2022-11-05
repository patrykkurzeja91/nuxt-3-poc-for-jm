<template>
  <div
    class="flex mx-auto max-w-xl rounded-lg border-light-grayish-blue-200 bg-white md:border md:drop-shadow-xl"
  >
    <form
      class="flex w-full flex-col md:px-20 md:py-20"
      @submit.prevent="handleSubmit"
    >
      <h3 class="mb-4">Personal info</h3>
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
        v-model="v$.phone.$model"
        placeholder="Phone number"
        required
        label="Phone number"
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
        placeholder="Post code"
        required
        label="Post Code"
        :v="v$.postcode"
      />
      <AtomsBaseInput
        v-model="state.additional_info"
        placeholder="Additional address information"
        label="Additional address information"
      />

      <h3 class="mt-6 mb-4">Company info</h3>
      <AtomsBaseInput
        v-model="v$.company.$model"
        placeholder="Your company name"
        required
        label="Company name"
        :v="v$.company"
      />
      <AtomsBaseInput
        v-model="v$.established.$model"
        placeholder=""
        required
        label="How long has the company been in existence?"
        :v="v$.established"
      />
      <AtomsBaseTextarea
        v-model="v$.socials.$model"
        placeholder="twitter, instagram, facebook..."
        required
        maxlength="1000"
        label="Links to social media / websites"
        :v="v$.socials"
      />
      <AtomsBaseTextarea
        v-model="v$.company_profile.$model"
        placeholder=""
        required
        maxlength="500"
        label="What does the company do?"
        :v="v$.company_profile"
      />
      <AtomsBaseTextarea
        v-model="v$.achievements.$model"
        placeholder=""
        required
        maxlength="500"
        label="Company achievements. List the awards, distinctions"
        :v="v$.achievements"
      />
      <AtomsBaseTextarea
        v-model="v$.publications.$model"
        placeholder="trade magazines, radio, speeches at conferences..."
        required
        maxlength="500"
        label="Publications about the company in the media"
        :v="v$.publications"
      />
      <AtomsBaseTextarea
        v-model="v$.motivation.$model"
        placeholder=""
        required
        label="Why should you be the winner in your category?"
        :v="v$.motivation"
      />
      <label class="mb-2 inline-flex text-lg"
        >Categories
        <span v-if="required" class="ml-1 text-red-600">*</span></label
      >
      <VueMultiselect
        v-model="state.selectedCategories"
        group-values="data"
        group-label="subcat"
        track-by="id"
        label="name"
        :options="groupedCategories"
        multiple
        :close-on-select="false"
        select-label="Select"
        deselect-label="Remove"
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
const { data: currentEvent } = await useFetch<Ticket>(
  () => import.meta.env.VITE_API_URL + `/event`,
  { pick: ['id'] }
)
const { data } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`
)

const { groupedCategories } = useGroupedCategories(data.value.categories)

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
.multiselect__option--selected {
  @apply bg-royal-blue/80 text-white !important;
}
.multiselect__option--selected::after {
  @apply font-thin text-light-grayish-blue-500 !important;
}
.multiselect__option--selected.multiselect__option--highlight {
  @apply bg-red-400 !important;
}
.multiselect__option--selected.multiselect__option--highlight::after {
  @apply bg-red-400 font-thin text-light-grayish-blue-500 !important;
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
