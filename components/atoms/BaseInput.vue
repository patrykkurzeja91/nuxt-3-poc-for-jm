<template>
  <div class="mb-4 block">
    <div class="relative" :class="{ 'input--error': v && v.$error }">
      <div
        v-if="icon"
        class="icon-wrapper pointer-events-none absolute flex items-center pl-3"
      >
        <nuxt-icon
          name="mail"
          filled
          font-size=""
          class="flex h-5 w-5 items-center justify-center"
        />
      </div>
      <label
        v-show="label"
        :for="slugify(label)"
        class="mb-2 inline-flex text-lg"
        >{{ label
        }}<span v-if="required" class="ml-1 text-red-600">*</span></label
      >
      <input
        v-bind="$attrs"
        :id="slugify(label)"
        :value="modelValue"
        type="text"
        :required="required"
        :class="[{ 'pl-10': icon }, errorClass]"
        class="block w-full rounded-md border border-light-grayish-blue-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        :placeholder="placeholder"
        @input="updateValue"
      />
    </div>
    <span
      v-if="showErrorMessage"
      class="mt-3 inline-flex w-full text-left text-red-600"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ValidationArgs } from '@vuelidate/core'

const { slugify } = useTextSlugify()

const props = withDefaults(
  defineProps<{
    modelValue: string
    icon?: string
    placeholder?: string
    label?: string
    v?: ValidationArgs<any>
    type?: string
    required?: boolean
  }>(),
  {
    icon: '',
    placeholder: '',
    label: '',
    type: 'text',
    v: undefined,
    required: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const errorMessage = computed(() => {
  // if (props.v !== undefined && isArrayEmpty(props.v.$errors)) {
  //   return ''
  // }
  return props.v?.$errors[0].$message
})
const errorClass = computed(() => {
  return props.v?.$error ? 'input--error' : ''
})
const showErrorMessage = computed(() => {
  return props.v?.$error
})
</script>
<style scoped>
.icon-wrapper {
  top: 50%;
  transform: translateY(-50%);
}
</style>
<style>
.input--error {
  @apply border-red-600;
}
.nuxt-icon > svg {
  margin-bottom: 0;
  width: auto;
  height: auto;
}
</style>
