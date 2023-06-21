<template>
  <v-btn :value="id" class="text-h5">
    <!-- <v-icon>mdi-history</v-icon> -->
    {{ displayText }}
  </v-btn>
</template>

<script setup lang="ts">
interface Props {
  id: number;
  displayText: string;
}
const Props = defineProps<Props>();
</script>
