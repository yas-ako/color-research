<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
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
import colorData1 from "@/assets/json/1.json";

const dialog = ref(true);
const currentNumber = ref(0);
const finished = ref(false);

function next(id) {
  dataSave(id);
  currentNumber.value = currentNumber.value + 1;
  const nextid = id + 1;
  // console.log(colorData1.data[nextid].colorA);
  if (!colorData1.data[nextid].colorA) {
    finished.value = true;
  }
}

// function finish(id)

function dataSave(id) {
  // ローカルストレージからデータを取得
  const curData = localStorage.getItem(useRoute().params.slug);
  const afterData = curData ? curData + "," + id : id;
  localStorage.setItem(useRoute().params.slug, afterData);
}

dataSave(useRoute().params.slug);

const buttonDatas = [
  { id: 1, displayText: "◎" },
  { id: 2, displayText: "〇" },
  { id: 3, displayText: "△" },
  { id: 4, displayText: "×" },
];
</script>
