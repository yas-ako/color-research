<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <NuxtLink to="/">色の区別に関する調査</NuxtLink>
      </v-app-bar-title>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="isMenuOpen = !isMenuOpen"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="isMenuOpen" location="right" temporary>
      <v-container>
        <!-- <v-btn variant="flat" color="secondary" prepend-icon="mdi-login" class="my-2" to="/signin">
          ログイン
        </v-btn> -->
        <!-- <v-btn variant="flat" color="secondary" prepend-icon="mdi-login" class="my-2" to="/dashboard">
          アカウントページ
        </v-btn> -->
        <v-btn variant="flat" color="secondary" class="my-2" to="/about">
          <!-- prepend-icon="mdi-login" -->
          この調査について
        </v-btn>
        <!-- <v-progress-circular indeterminate color="red"></v-progress-circular> -->
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <v-main>
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>
    </v-main>
  </v-app>
  <!-- </template> -->

  <!-- <script setup>


const drawer = ref(false);

function logout() {
  const client = useSupabaseAuthClient()
  client.auth.signOut()
  drawer.value = false;
}
</script> -->
</template>

<script setup>
const isMenuOpen = ref(false);
</script>
