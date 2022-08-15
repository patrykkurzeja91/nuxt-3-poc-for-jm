<template>
<div class="mb-6">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default input</label>
    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <MailIcon aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
  </div>
  <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
</div>
</template>

<script setup>
import { MailIcon } from "@heroicons/vue/outline"


</script>
