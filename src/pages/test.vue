<template>
  <v-btn color="secondary" class="my-2" text="クリック！" @click="postData()" />
</template>

<script setup>
function postData() {
  const { data } = useFetch("api/postData", {
    method: "POST",
    body: localStorage.getItem("1"),
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  });
  console.log(data);
  return data;
}
</script>
