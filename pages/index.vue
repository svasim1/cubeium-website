<template>
    <!-- Welcome Section -->
    <UContainer>
    <UCard class="text-center p-12 mt-16">
      <h1 class="text-5xl font-bold mb-6">Welcome to Cubeium</h1>
      <p class="text-lg">
        Discover Minecraft seeds like never before! Use our interactive Seed Map to explore amazing worlds and structures.
      </p>
    </UCard>
    </UContainer>

    <UContainer>
    <!-- Features Section -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Feature 1: Seed Map -->
      <UCard>
        <Icon name="lucide:map" class="text-5xl text-primary mb-4" />
        <h2 class="text-2xl font-bold mb-2">Interactive Seed Map</h2>
        <p class="text-gray-600">
          Visualize Minecraft seeds on an interactive map. Explore biomes, structures, and more with ease.
        </p>
        Learn More
      </UCard>

      <!-- Feature 2: News & Updates -->
      <UCard>
        <Icon name="lucide:users" class="text-5xl text-primary mb-4" />
        <h2 class="text-2xl font-bold mb-2">Community & Support</h2>
        <p class="text-gray-600">
          Join our community for support, discussions, and sharing your favorite seeds.
        </p>
        Join Us
      </UCard>

      <!-- Feature 3: FAQ -->
      <UCard>
        <Icon name="lucide:help-circle" class="text-5xl text-primary mb-4" />
        <h2 class="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
        <p class="text-gray-600">
          Have questions? Check out our FAQ section to learn more about Cubeium and how to use it.
        </p>
        Learn More
      </UCard>
    </div>
  </UContainer>

    <!-- FAQ Section -->
    <UContainer>
      <UCard class="p-12 mt-16">
          <h2 class="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <FAQAccordion />
      </UCard>
    </UContainer> 
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<style scoped>
/* Add any custom styles here */
</style>