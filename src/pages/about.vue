<template>
  <h2 class="text-h4 mb-8 text-center">この調査について</h2>
  <p>
    5年B組の湯朝朗央です。「色の組み合わせのとらえ方について」というテーマで論文を作成する予定であり、調査に必要なデータを取集しようと考えています。お手数ですが、回答いただけると幸いです。ご協力、よろしくお願い致します。
  </p>
  <h3 class="text-h5 my-3">調査内容</h3>
  <p>調査内容は、以下の二点です。</p>
  <ol class="ma-6">
    <li>色の組み合わせの見分けやすさ</li>
    <li>色の組み合わせが与える印象</li>
  </ol>

  <h4 class="text-h6 my-3">1. 見分けやすさ</h4>
  <p>画面上の文字が見やすいかどうか、4段階で評価してください。</p>

  <h4 class="text-h6 my-3">2. 与える印象</h4>
  <p>
    画面上に表示された二色の組み合わせについて、心地よく感じるかどうか、4段階で評価してください。
  </p>

  <h3 class="text-h5 my-3">データの活用について</h3>
  <p>
    アンケートにより得られたデータは、全て論文執筆のための研究のみに使用します。
  </p>

  <h3 class="text-h5 my-3">システムについて</h3>
  <p>
    このアンケートフォームではCookieやLocalStorageという技術を使用しています。この情報を用いて、回答者の個人情報を知ることはできません。
  </p>

  <div class="mx-0 my-7">
    <v-btn class="bg-primary mx-auto" to="/" @click="click">
      アンケートに回答する
    </v-btn>
  </div>
</template>

<script setup>
const cookie = useCookie("visited", { maxAge: 60 * 60 * 24 * 30 * 3 });
const cokkie_user = useCookie("user", { maxAge: 60 * 60 * 24 * 30 * 3 });
function click() {
  cookie.value = true;
  if (!useCookie("user").value) {
    cokkie_user.value = crypto.randomUUID();
  }
}
</script>
