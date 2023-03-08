<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div>
    <div class="i-carbon-pedestrian text-4xl inline-block " />
    <p>
      Hi, {{ route.params.name }}
    </p>
    <p class="text-sm opacity-50">
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
