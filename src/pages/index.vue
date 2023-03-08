<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TheInput from '~/components/TheInput.vue'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div class="i-carbon-campsite text-4xl inline-block" />
    <p>
      <a rel="noreferrer" href="https://github.com/skywalker512/rspacksse-lite" target="_blank">
        Rspacksse Lite
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">Opinionated Rspack Starter Template</em>
    </p>

    <div class="py-4" />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
