<script setup lang="ts">
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
  <main class="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <TheFooter />
  </main>
</template>
