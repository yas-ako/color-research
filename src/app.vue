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
      <v-bottom-navigation>
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>

          Recent
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>

          Favorites
        </v-btn>

        <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>

          Nearby
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>
