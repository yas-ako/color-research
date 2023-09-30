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
  <v-alert
    closable
    type="info"
    title="アンケートフォームのミスの詳細"
    class="my-3"
  >
    <p>
     色の組み合わせに関する調査を行うにあたり、36色使用することとしました。その中から2色を選んで並べる場合の総組み合わせ数は1260通り（36×35=1260通り）ですが、全ての組み合わせを全員に回答していただくには，一人当たりの負担が大きくなりすぎてしまいます。
 </p>
    <p>
そこで、1260通りある組み合わせを20グループ（63×20）に分割してアンケートを行うこととし，一人当たり20グループ中の1つが自動的に表示される仕組みを作りました。
 </p>
しかし、画面に表示される色のデータを生成する際，色のデータが20グループすべて全く同じになってしまうというミスを犯してしまいました。
 <p>
残りの19グループのデータも収集したいと考えています。
   </p>
    <p>
    お忙しい中，ご面倒をおかけしますがご協力をよろしくお願いいたします。
 </p>
  </v-alert>
  <div class="mx-0 my-7">
    <v-btn class="bg-primary mx-auto" to="/" @click="click">
      アンケートに回答する
    </v-btn>
  </div>
</template>

<script setup>
const cookie_confirmed = useCookie("confirmed", {
  maxAge: 60 * 60 * 24 * 30 * 3,
});
const cokkie_user = useCookie("user", { maxAge: 60 * 60 * 24 * 30 * 3 });
function click() {
  cookie_confirmed.value = true;
  if (!useCookie("user").value) {
    cokkie_user.value = crypto.randomUUID();
  }
}
</script>
