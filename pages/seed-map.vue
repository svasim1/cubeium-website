<template>
    <div>
        <!-- Seed Input Form -->
        <form @submit.prevent="loadSeedMap">
            <label for="seed">Enter Seed:</label>
            <input type="text" id="seed" v-model="seed" placeholder="Enter Minecraft seed" />
            <button type="submit">Load Map</button>
        </form>

        <!-- Map Viewer -->
        <l-map
            style="width: 100%; height: 500px;"
            :zoom="zoom"
            :center="center"
            :use-global-leaflet="false"
        >
            <l-tile-layer
                url="https://yourserver.com/tiles/{z}/{x}/{y}.png"
                attribution="Custom Minecraft Map"
            />
        </l-map>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            seed: '', // User input seed
            center: [0, 0], // Default map center
            zoom: 2, // Default zoom level
        };
    },
    methods: {
        loadSeedMap() {
            // Placeholder for loading seed map logic
            console.log(`Loading map for seed: ${this.seed}`);
        },
    },
};
</script>

<style>
/* Add basic styling */
#map {
    border: 1px solid #ccc;
    margin-top: 10px;
}
</style>