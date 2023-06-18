<template>aa</template>

<script setup>
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
