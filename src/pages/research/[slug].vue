<template>
  aaa
  <!-- <p> -->

  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <!-- <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template> -->

      <v-card>
        <v-card-text>
          <p class="text-h4">aa</p>
          このアンケート調査では、
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <DisplayColor :id="currentNumber" :type="$route.params.slug" />
  <!-- </p> -->
  <!-- <div @click="currentNumber = currentNumber + 1">+</div> -->
  <!-- <div @click="currentNumber = currentNumber - 1">-</div> -->

  <!-- <v-btn @click="currentNumber = currentNumber - 1" class="bg-primary ma-6"> -->
  <!-- - -->
  <!-- </v-btn> -->
  <!-- {{ currentNumber }} -->

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
const dialog = ref(true);
const currentNumber = ref(0);

function next(id) {
  currentNumber.value = currentNumber.value + 1;
  dataSave(id);
}

function dataSave(id) {
  // ローカルストレージからデータを取得
  const curData = localStorage.getItem(useRoute().params.slug);
  const afterData = curData ? curData + "," + id : id;
  localStorage.setItem(useRoute().params.slug, afterData);
}
// function dataSave(key: string, value: string) {
//   const curData: string[] = dataLoad(key);

//   curData.push;
//   localStorage.setItem("research" + currentNumber.value, value);
// }

// function dataLoad(key: string): JSON {
//   return JSON.parse(localStorage.getItem(key)!);
// }

const buttonDatas = [
  { id: 1, displayText: "◎" },
  { id: 2, displayText: "〇" },
  { id: 3, displayText: "△" },
  { id: 4, displayText: "×" },
];
</script>
