<template>
  <div class="home">
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.decrement">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <hr />
    <h3>Number is : Even/Odd</h3>
    <div>{{ storeCounter.evenOrOdd }}</div>
    <hr />
    <div>
      <h3>Edit Counter</h3>
      <div>
        <input type="number" v-model="storeCounter.count" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed, ref } from "vue";
import { useCountStore } from "@/stores/counter";

const storeCounter = useCountStore();

// const count = ref(0);

// const increment = () => count.value++;
// const decrement = () => count.value--;

// const isEvenOrOdd = computed(() => {
//   if (storeCounter.count % 2 === 0) return "Even";
//   return "Odd";
// });
</script>

<style></style>
