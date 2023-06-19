<template>
  aaa
  <p>
    <DisplayColor :id="currentNumber" />
  </p>
  <div @click="currentNumber = currentNumber + 1">+</div>
  <div @click="currentNumber = currentNumber - 1">-</div>
  {{ currentNumber }}
</template>

<script setup>
const currentNumber = ref(0);
</script>
