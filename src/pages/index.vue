<template>
  <template v-for="list in researchList">
    <ResearchLink :link="list.link" :title="list.title" :text="list.text" />
  </template>
</template>

<script setup>
const researchList = [
  {
    link: "/research/1",
    title: "調査①",
    text: "色の見分け安さ",
  },
  {
    link: "/research/2",
    title: "調査②",
    text: "色の心地よさ",
  },
];

definePageMeta({
  middleware: [
    function (to, from) {
      if (!useCookie("visited").value) {
        return navigateTo("/about");
      }
    },
  ],
});
</script>
