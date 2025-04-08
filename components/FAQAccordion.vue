<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'What is Cubeium?',
    icon: 'lucide:help-circle',
    content: 'Cubeium is a platform that allows you to explore and visualize Minecraft seeds on an interactive map.'
  },
  {
    label: 'How do I get started?',
    icon: 'lucide:play-circle',
    content: 'To get started, simply visit our Seed Map page and enter your Minecraft seed.'
  },
  {
    label: 'Is Cubeium free to use?',
    icon: 'lucide:dollar-sign',
    content: 'Cubeium is completely free to use.'
  }
])
</script>

<template>
  <UAccordion :items="items" />
</template>
