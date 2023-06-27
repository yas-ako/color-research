<template>
  <div>
    <div
      v-if="$route.path.match(/2/)"
      class="w-100 colorA pa-auto h-half"
    ></div>
    <div
      v-if="$route.path.match(/2/)"
      class="w-100 colorB h-half pa-auto"
    ></div>
    <template v-else-if="$route.path.match(/1/)">
      <div class="w-100 colorA h-all pa-auto text-center">
        <div class="text-h3 my-auto">あいうえお</div>
      </div>
    </template>
    <div v-else>
      不正なURLです。
      <NuxtLink to="/">
        <v-btn class="bg-warning">ホームへ戻る</v-btn></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.colorA {
  /* background-color: v-bind(colorA); */
  background-color: lch(v-bind(colorA));
  color: lch(v-bind(colorB));
}
.colorB {
  background-color: lch(v-bind(colorB));
}
.h-half {
  height: 30dvh;
}
.h-all {
  height: 60dvh;
  display: grid;
  place-items: center;
}
</style>

<script setup lang="ts">
interface Props {
  type: string | string[];
  id: number;
  group_id: number;
}

interface colorDatas {
  type: number;
  data: {
    colorA: string;
    colorB: string;
  };
}

import colorData1 from "@/assets/json/1.json";
import colorData2 from "@/assets/json/combination_list.json";

const Props = withDefaults(defineProps<Props>(), {
  id: 0,
  group_id: 0,
});

const colorA = computed(() => {
  // return colorData1.data[id.id].colorA;
  const l = colorData2[Props.group_id][Props.id][0][1];
  const c = colorData2[Props.group_id][Props.id][0][2];
  const h = colorData2[Props.group_id][Props.id][0][0];
  return [l + "% " + (c * 134) / 100 + " " + h];
  // return [l + "%", (c * 134) / 100, h];
});
const colorB = computed(() => {
  // return colorData1.data[id.id].colorB;
  const l = colorData2[Props.group_id][Props.id][1][1];
  const c = colorData2[Props.group_id][Props.id][1][2];
  const h = colorData2[Props.group_id][Props.id][1][0];
  return [l + "% " + (c * 134) / 100 + " " + h];
});
</script>
