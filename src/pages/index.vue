<template>
  <!-- <v-alert
    closable
    text="6/27日 15:30ごろまで、アンケート調査に回答できいない状態となっていました。現在は修正されております。"
    type="info"
  ></v-alert> -->
  <v-alert
    closable
    text="アンケートフォームに不具合があり，一部の色に関する質問しかできていない状態でした。申し訳ありませんが、すでに回答いただいた方も，もう一度ご協力をお願いいたします。"
    type="info"
  ></v-alert>
  <template v-for="list in researchList">
    <ResearchLink
      :link="list.link"
      :title="list.title"
      :text="list.text"
      :id="list.id"
      :is_finished="list.is_finished"
    />
  </template>
</template>

<script setup>
const error = ref(true);
// const runtimeConfig = useRuntimeConfig();
// console.log(runtimeConfig.GAS_URL);
const researchList = [
  {
    // link: "/research/1",
    link: "/research/01",
    is_finished: "1_is_finished",
    title: "調査①",
    id: "1",
    text: "色の見分け安さ",
  },
  {
    // link: "/research/2",
    link: "/research/02",
    is_finished: "2_is_finished",
    title: "調査②",
    id: "2",
    text: "色の心地よさ",
  },
];

definePageMeta({
  middleware: [
    function (to, from) {
      if (!useCookie("confirmed").value) {
        return navigateTo("/about");
      } else if (!useCookie("user").value) {
        return navigateTo("/about");
      }
    },
  ],
});
</script>
