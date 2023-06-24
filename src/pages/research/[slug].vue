<template>
  <div class="text-center">
    <v-dialog v-model="starDialog" persistent width="auto">
      <v-card>
        <v-card-text>
          <template v-if="$route.params.slug == '1'">
            <p class="text-h4">
              {{ surveyInstruction[1].title }}
            </p>
            {{ surveyInstruction[1].message }}
          </template>
          <template v-if="$route.params.slug == '2'">
            <p class="text-h4">
              {{ surveyInstruction[2].title }}
            </p>
            {{ surveyInstruction[2].message }}
          </template>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            @click="closeStartDialog($route.params.slug)"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="finishDialog" persistent width="auto">
      <v-card>
        <v-card-text>
          <p class="text-h4">aa</p>
          アンケートへのご協力ありがとうございました。アンケートは二つあります。両方の回答をお願いします。
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            @click="submit()"
            :disabled="submitButtonDisabled"
            :loading="submitButtonDisabled"
            >回答を送信</v-btn
          >
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

const surveyInstruction = {
  1: {
    title: "調査1",
    message:
      "調査1では、色の見分けやすさを判断していただきます。画面に表示された色が見やすいかどうか、4段階で評価してください。見やすく感じるものから、「◎」「〇」「△」「×」の順で評価してください。",
  },
  2: {
    titlte: "調査2",
    message:
      "調査2では、色から感じる印象を判断していただきます。心地よく感じる組み物から、「◎」「〇」「△」「×」の順で評価してください",
  },
};

const starDialog = ref(true);
const finishDialog = ref(false);
const currentNumber = ref(0);
const finished = ref(false);
const submitButtonDisabled = ref(false);
const isInProduction = false;

function next(id) {
  dataSave(id);
  const nextid = currentNumber.value + 1;
  console.log(nextid);
  // console.log(colorData1.data[nextid].colorA);
  if (colorData1.data[nextid] === undefined) {
    console.log("finished");
    finished.value = true;
    finishDialog.value = true;
  } else {
    currentNumber.value = currentNumber.value + 1;
  }
}

function closeStartDialog(id) {
  storageReset(id);
  starDialog.value = false;
  dataSave(id);
}

function storageReset(id) {
  localStorage.setItem(id, "");
}

function dataSave(id) {
  // ローカルストレージからデータを取得
  const curData = localStorage.getItem(useRoute().params.slug);
  const afterData = curData ? curData + "," + id : id;
  localStorage.setItem(useRoute().params.slug, afterData);
}

// dataSave(useRoute().params.slug);

const buttonDatas = [
  { id: 1, displayText: "◎" },
  { id: 2, displayText: "〇" },
  { id: 3, displayText: "△" },
  { id: 4, displayText: "×" },
];

async function submit() {
  submitButtonDisabled.value = true;
  if (isInProduction) {
    const { data } = await useFetch(
      "https://script.google.com/macros/s/AKfycbx9lzXy1tQOkLLTAqsD1grwQ6aVbKsNsSYfLbVe2feq5OG7tG-EVivusMCNxegSbeCh/exec",
      {
        method: "POST",
        body: localStorage.getItem(useRoute().params.slug),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    );
    console.log(data);
    localStorage.setItem(useRoute().params.slug + "_is_finished", true);
  }
  navigateTo("/");
}

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
