<template>
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    MAIL ICON

    <!-- <MailIcon aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
  </div>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="updateValue"
    type="text"
    id="email-address-icon"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
</div>
</template>

<script setup lang="ts">
// import { MailIcon } from "@heroicons/vue/outline"

defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{(e: 'update:modelValue', modelValue: string | number): void}>()


const updateValue = (e: InputEvent) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
