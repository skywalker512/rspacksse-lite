<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>

<template>
  <nav class="text-xl mt-6 space-x-2">
    <button class="icon-btn" @click="toggleDark()">
      <div class="dark:i-carbon-moon i-carbon-sun" />
    </button>

    <a
      class="icon-btn i-carbon-logo-github"
      rel="noreferrer"
      href="https://github.com/skywalker512/rspacksse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
