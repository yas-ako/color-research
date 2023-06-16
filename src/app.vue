<!-- <NuxtWelcome /> -->
<template>
  <!-- <v-app>
    <v-app-bar title="アンケート調査">
      <v-btn @click="isMenuOpen = !isMenuOpen">
        <v-icon icon="mdi-menu"></v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="isMenuOpen" temporary=""
      >...</v-navigation-drawer
    >

    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>
  </v-app>

  <template> -->
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <NuxtLink to="/">記念祭運営システム</NuxtLink>
      </v-app-bar-title>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-container>
        <!-- <v-btn variant="flat" color="secondary" prepend-icon="mdi-login" class="my-2" to="/signin">
          ログイン
        </v-btn> -->
        <!-- <v-btn variant="flat" color="secondary" prepend-icon="mdi-login" class="my-2" to="/dashboard">
          アカウントページ
        </v-btn> -->
        <v-btn
          variant="flat"
          color="secondary"
          prepend-icon="mdi-login"
          class="my-2"
          @click.stop="logout"
        >
          サインアウト
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
const isMenuOpen = false;
</script>
