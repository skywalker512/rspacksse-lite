<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input
    id="input"
    v-model="data"
    type="text"
    v-bind="$attrs"
    class="
      px-4 py-2
      w-[250px] text-center bg-transparent
      border rounded border-gray-200 dark:border-gray-700
      outline-none active:outline-none
    "
  >
</template>
