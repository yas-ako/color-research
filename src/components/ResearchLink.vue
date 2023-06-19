<template>
  <v-card :title="title" :text="text" :to="link" class="bg-secondary my-7" />
</template>

<script setup lang="ts">
interface Props {
  title: string;
  text: string;
  link: string;
}

const Props = withDefaults(defineProps<Props>(), {
  title: "titlea",
  text: "texta",
  link: "linka",
});
</script>
