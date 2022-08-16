<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      MAIL ICON
      <!-- <MailIcon aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
    </div>
    <input
      v-bind="$attrs"
      id="email-address-icon"
      :value="modelValue"
      type="text"
      class="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="name@flowbite.com"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
// import { MailIcon } from "@heroicons/vue/outline"

defineProps<{
  modelValue: string
}>()

console.log('ss')

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

const updateValue = (e: InputEvent) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
