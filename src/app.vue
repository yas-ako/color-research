<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <NuxtLink to="/"
          ><h1 class="text-h6">色の組み合わせに関する調査</h1></NuxtLink
        >
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

    <!-- アンケート調査の終了のお知らせ -->
    <v-dialog v-model="endOfInvestigation" persistent width="auto">
      <v-card>
        <v-card-text class="pb-4">
          アンケート調査は終了いたしました。ご協力いただいた皆様，ありがとうございました。
        </v-card-text>
        <!-- <v-card-actions> -->
        <!-- <v-btn color="primary" block @click="dialog = false" -->
        <!-- >Close Dialog</v-btn -->
        <!-- > -->
        <!-- </v-card-actions> -->
      </v-card>
    </v-dialog>
    <!-- アンケート調査の終了のお知らせ -->

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const isMenuOpen = ref(false);
const endOfInvestigation = ref(true);
</script>
