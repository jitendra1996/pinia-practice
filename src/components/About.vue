<template>
  <div class="about-class">
    <h1>About</h1>
    <button @click="storeCounter.increment">
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<script setup>
import { useCountStore } from "@/stores/counter";

const storeCounter = useCountStore();
</script>

<style></style>
