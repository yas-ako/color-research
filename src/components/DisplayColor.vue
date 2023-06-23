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
        <div class="text-h4 my-auto">あいうえお</div>
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
  background-color: v-bind(colorA);
  color: v-bind(colorB);
}
.colorB {
  background-color: v-bind(colorB);
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
}

interface colorDatas {
  type: number;
  data: {
    colorA: string;
    colorB: string;
  };
}

import colorData1 from "@/assets/json/1.json";

const id = withDefaults(defineProps<Props>(), {
  id: 0,
});

const colorA = computed(() => {
  return colorData1.data[id.id].colorA;
});
const colorB = computed(() => {
  return colorData1.data[id.id].colorB;
});
</script>
