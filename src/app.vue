<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <NuxtLink to="/">色の区別に関する調査</NuxtLink>
      </v-app-bar-title>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="isMenuOpen = !isMenuOpen"
      />
    </v-app-bar>
    <v-navigation-drawer v-model="isMenuOpen" location="right" temporary>
      <v-container>
        <v-btn variant="flat" color="secondary" class="my-2" to="/about">
          この調査について
        </v-btn>
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
      <!-- <v-bottom-navigation
        class="text-h5 p-6"
        v-if="$route.path.match(/research/)"
      >
        <template v-for="buttonData of buttonDatas">
          <SurveyButtonIcon
            class="pa-5"
            :id="buttonData.id"
            :display-text="buttonData.displayText"
          />
        </template>
      </v-bottom-navigation> -->
    </v-main>
  </v-app>
</template>

<script setup>
const isMenuOpen = ref(false);

// const buttonDatas = [
//   { id: 1, displayText: "◎" },
//   { id: 2, displayText: "〇" },
//   { id: 3, displayText: "△" },
//   { id: 4, displayText: "×" },
// ];
</script>
