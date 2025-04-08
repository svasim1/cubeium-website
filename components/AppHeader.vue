<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// Centralized menu items for easy updates
const items = ref<NavigationMenuItem[][]>([
[
  {
    label: 'Home',
    icon: 'lucide:home',
    to: '/'
  },
  {
    label: 'Seed Map',
    icon: 'lucide:map',
    to: '/seed-map',
    description: 'View and explore Minecraft seeds on an interactive map.'
  },
  {
    label: 'FAQ',
    icon: 'lucide:help-circle',
    to: '/faq',
    description: 'Frequently asked questions about Minecraft seeds and maps.'
  },
  {
    label: 'About',
    icon: 'lucide:info',
    to: '/about',
    description: 'Learn more about this project and its purpose.'
  }
],
[
{
    label: 'Theme',
    icon: 'lucide:sun-moon',
  }
]
])
</script>

<template>
  <header class="flex items-center justify-between p-4 bg-gray-800 text-white">
    
    <!-- Navigation Menu -->
    <UNavigationMenu :items="items" class="w-full" />
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>