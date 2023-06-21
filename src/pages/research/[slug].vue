<template>
  aaa
  <!-- <p> -->
  <DisplayColor :id="currentNumber" :type="$route.params.slug" />
  <!-- </p> -->
  <!-- <div @click="currentNumber = currentNumber + 1">+</div> -->
  <!-- <div @click="currentNumber = currentNumber - 1">-</div> -->

  <v-btn @click="currentNumber = currentNumber - 1" class="bg-primary ma-6"
    >-</v-btn
  >
  {{ currentNumber }}

  <v-bottom-navigation class="text-h5 p-6" v-if="$route.path.match(/research/)">
    <template v-for="buttonData of buttonDatas">
      <SurveyButtonIcon
        class="pa-5"
        :id="buttonData.id"
        :display-text="buttonData.displayText"
        @click="next(buttonData.id)"
      />
    </template>
  </v-bottom-navigation>
</template>

<script setup>
const currentNumber = ref(0);

function next(id) {
  localStorage.setItem("research" + currentNumber.value, id);
  currentNumber.value = currentNumber.value + 1;
}

const buttonDatas = [
  { id: 1, displayText: "◎" },
  { id: 2, displayText: "〇" },
  { id: 3, displayText: "△" },
  { id: 4, displayText: "×" },
];
</script>
