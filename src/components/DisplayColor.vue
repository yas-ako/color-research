<template>
  <!-- <div :style="colors"> -->
  <div>
    <!-- {{ type }} -->
    <!-- {{ $route.params.path }} -->
    <div
      v-if="$route.path.match(/1/)"
      class="w-100 color1 pa-auto h-half"
    ></div>
    <div
      v-if="$route.path.match(/1/)"
      class="w-100 color2 h-half pa-auto"
    ></div>
    <div
      v-else-if="$route.path.match(/2/)"
      class="w-100 color2 h-all pa-auto"
    ></div>
    <div v-else>
      不正なURLです。
      <NuxtLink to="/">
        <v-btn class="bg-warning">ホームへ戻る</v-btn></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.color1 {
  background-color: v-bind(color1);
}
.color2 {
  background-color: v-bind(color2);
}
.h-half {
  height: 30dvh;
}
.h-all {
  height: 60dvh;
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
    color1: string;
    color2: string;
  };
}

import colorData1 from "@/assets/json/1.json";

const id = withDefaults(defineProps<Props>(), {
  id: 1,
});

// const colors = ref({
//   "--color1": "#222222",
//     "--color2": "#777777",
// });

const color1 = ref("#222222");
// const color2 = ref("#222222");
// const color1 = computed(() => {
//   return colorData1.data[id.id].color1;
// });
watch(id, (next, prev) => {
  color1.value = colorData1.data[id.id].color1;
});

const color2 = computed(() => {
  return colorData1.data[id.id].color2;
});

// watch(
//   () => id,
//   () => (color1.value = colorData1.data[id.id].color1)
// );
// () => (colors.value["--color1"] = colorData1.data[id.id].color1)

// watch(
//   () => id,
//   // () => (colors.value["--color1"] = colorData1.data[id.id].color1)
//   () => (color2.value = colorData1.data[id.id].color1)
// );
</script>
