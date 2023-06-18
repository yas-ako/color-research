<template>
  <!-- <div class="text-h2 text-center">Hello world!</div> -->
  <!-- <v-alert title="この調査について" type="info"> -->
  <p class="text-h4 mb-8 text-center">この調査について</p>
  <p>
    5年次研究論文にあたり、「さまざまな色の組み合わせをどう感じるのか」について調査しています。そのためのアンケート調査にご協力をお願い致します。
  </p>
  <p class="text-h5 my-3">調査内容</p>
  画面に色付きの文字が表示されます。また、背景にも色が着きます。背景と文字の色の組み合わせについて、文字が読みやすく感じるかどうかを
  4段階で評価していただきます。 データの活用について
  アンケートにより得られたデータは、全て論文の研究のみに使用します。
  回答したかどうかの情報はウェブブラウザのみに保存されるため、こちらから回答者がだれかを把握することはできません。
  <p class="text-h5 my-3">クッキーの利用について</p>
  回答したかどうかを判断するため、このアンケートフォームでは Cookie
  という技術を使用しています。
  <!-- </v-alert> -->
</template>

<script setup>
const cookie = useCookie("visited", { maxAge: 60 * 60 * 24 * 30 * 2 });
cookie.value = true;
</script>
