<template>
  aaa
  <p>
    <DisplayColor :id="currentNumber" :type="$route.params.slug"/>
  </p>
  <!-- <div @click="currentNumber = currentNumber + 1">+</div> -->
  <!-- <div @click="currentNumber = currentNumber - 1">-</div> -->
  <v-btn @click="currentNumber = currentNumber + 1" class="bg-primary ma-6"
    >+</v-btn
  >
  <v-btn @click="currentNumber = currentNumber - 1" class="bg-primary ma-6"
    >-</v-btn
  >
  {{ currentNumber }}
</template>

<script setup>
const currentNumber = ref(0);
</script>
