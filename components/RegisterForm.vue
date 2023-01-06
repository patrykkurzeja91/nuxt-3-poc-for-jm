<template>
  <div class="mx-auto flex max-w-xl">
    <form
      class="flex w-full flex-col md:px-20 md:py-20"
      novalidate
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
        placeholder="List the awards, distinctions..."
        required
        maxlength="500"
        label="Company achievements"
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
        <span v-if="required" class="ml-1 text-red-600">*</span>
      </label>
      <VueMultiselect
        v-if="!pending"
        v-model="v$.selectedCategories.$model"
        :class="{ 'is-error': v$.selectedCategories.$error }"
        required
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
      <div v-if="error">some error {{ error }}</div>
      <span
        v-if="v$.selectedCategories.$error"
        class="mt-3 inline-flex w-full text-left text-red-600"
      >
        {{ v$.selectedCategories.$errors[0].$message }}
      </span>

      <button
        class="mt-8 inline-flex items-center justify-center rounded-md bg-royal-blue px-10 py-3 text-center text-base font-medium text-white hover:bg-yale-blue"
        type="submit"
      >
        submit
      </button>
      <p class="mt-4 text-sm">
        Your data will not be passed on without your consent. You make a secure
        payment through the payment gateway.
      </p>
    </form>
    <div
      v-if="showErrorMessage"
      id="toast-warning"
      class="fixed bottom-20 right-14 flex w-full max-w-xs items-center rounded-lg bg-red-100 p-4 text-gray-500 shadow"
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
import type { Ticket, Category } from '@/types'
const { data: currentEvent } = await useFetch<Ticket>(
  () => import.meta.env.VITE_API_URL + `/event`,
  { pick: ['id'] }
)

const showErrorMessage = ref(false)
const categories = ref()

const { data, pending, error } = await useAsyncData<{ categories: Category[] }>(
  'categories',
  () => $fetch('https://api.beautykingdomawards.co.uk' + `/categories/all`)
)

// const { data } = await useFetch<{ categories: Category[] }>(
//   () => import.meta.env.VITE_API_URL + `/categories/all`
// )
categories.value = data.value?.categories

const { groupedCategories } = useGroupedCategories(categories.value)

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
  selectedCategories: [] as Category[],
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
  v$.value.$touch()

  if (!v$.value.$invalid) {
    await axios
      .post(import.meta.env.VITE_API_URL + `/nominee/buy`, {
        name: state.name,
        email: state.email,
        event_id: currentEvent.value?.id,
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
      })
      .then((response) => (window.location.href = response.data.payment_url))
      .catch((err) => {
        console.log('##err', err)
        showErrorMessage.value = true
      })
  }
}
</script>

<style>
.multiselect {
  min-height: 46px;
}
.multiselect.is-error .multiselect__tags {
  @apply border-red-600 !important;
}
.multiselect__select {
  height: 42px;
}
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
}
.multiselect__tag-icon:hover.multiselect__tag-icon::after {
  @apply text-white !important;
}
.multiselect__tag-icon::after {
  @apply text-light-grayish-blue-900 !important;
}
</style>
