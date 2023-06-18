<template>aa</template>

<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      if (!useCookie("visited")) {
        return navigateTo("/about");
      }
    },
  ],
});
</script>
