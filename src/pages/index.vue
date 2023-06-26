<template>
  <template v-for="list in researchList">
    <ResearchLink
      :link="list.link"
      :title="list.title"
      :text="list.text"
      :id="list.id"
      :is_finished="list.is_finished"
    />
  </template>
  <v-dialog v-model="starDialog" persistent width="auto">
      <v-card>
        <v-card-text>
            <p class="text-h4">
              Internet server error!</br> Please try again!
            </p>
        </v-card-text>
        <!-- <v-card-actions> -->
          <!-- <v-btn -->
            <!-- color="primary" -->
            <!-- block -->
            <!-- @click="closeStartDialog($route.params.slug)" -->
            <!-- >OK</v-btn -->
          <!-- > -->
        <!-- </v-card-actions> -->
      </v-card>
    </v-dialog>
</template>

<script setup>
// const runtimeConfig = useRuntimeConfig();
// console.log(runtimeConfig.GAS_URL);
const researchList = [
  {
    link: "/research/1",
    is_finished: "1_is_finished",
    title: "調査①",
    id: "1",
    text: "色の見分け安さ",
  },
  {
    link: "/research/2",
    is_finished: "2_is_finished",
    title: "調査②",
    id: "2",
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
