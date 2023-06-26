<template>
  <v-card
    v-if="!storage"
    :title="title"
    :text="text"
    :to="link"
    class="bg-blue-lighten-4 my-7"
  />
  <!-- @click="storageReset(id)" -->
  <v-card
    v-else
    :title="title"
    :to="link"
    :text="text + ' (回答済み)'"
    class="bg-grey-darken-1 my-7"
  >
  </v-card>
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
