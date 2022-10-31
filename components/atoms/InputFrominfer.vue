<template>
  <div class="input-group" :class="{ 'input--error': v && v.$error }">
    <label>
      {{ label }}
      <span v-if="required" class="required"> *</span>
    </label>
    <input
      v-bind="$attrs"
      v-model="fieldInput"
      :class="['input', errorClass]"
      @blur="v && v.$touch()"
    />
    <span v-if="showErrorMessage" class="error">
      {{ errorMessage }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { Validation } from '@vuelidate/core'
// import { isArrayEmpty } from '@/utils/helpers'
interface Props {
  value: string | number
  label?: string
  required?: boolean
  v?: Validation
}
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'input', value: string | number): void }>()
const fieldInput = computed({
  get() {
    return props.value
  },
  set(newValue: string | number) {
    emit('input', newValue)
  },
})
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
.input {
  width: 100%;
}
</style>
