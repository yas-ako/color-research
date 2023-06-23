<template>
  <v-card
    v-if="!storage"
    :title="title"
    :text="text"
    :to="link"
    class="bg-secondary my-7"
  />
  <!-- @click="storageReset(id)" -->
  <v-card
    v-else
    :title="title"
    :text="text + ' (回答済み)'"
    class="bg-gray my-7"
  />
</template>

<script setup lang="ts">
interface Props {
  title: string;
  text: string;
  link: string;
  is_finished: string;
  id: string;
}

const Props = withDefaults(defineProps<Props>(), {
  title: "titlea",
  text: "texta",
  link: "linka",
  is_finished: "",
  id: "",
});

const storage = localStorage.getItem(Props.is_finished);

function storageReset(id: string) {
  localStorage.setItem(id, "");
}
</script>
