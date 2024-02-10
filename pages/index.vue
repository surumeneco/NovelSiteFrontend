<template>
  <div>
    <PageContent
      ContentTitle="ストーリー"
      :-content-descriptions="[
        'エターナリア・ワールドの物語一覧です。',
        '各編に分かれています。'
      ]"
      -link="/stories"
    />
    <PageContent
      ContentTitle="設定集"
      :-content-descriptions="[
        'エターナリア・ワールドの設定一覧です。',
        'キャラクターのプロフィールや登場する場所、物語に出てくる用語などを見ることができます。'
      ]"
      -link="/tips"
    />
    <PageContent
      ContentTitle="辞書"
      :-content-descriptions="[
        'エターナリア・ワールドに登場する様々な言語の辞書です。',
        '各単語のスペルや意味、語源などを確認することができます。'
      ]"
      -link="/languages"
    />
  </div>
</template>

<script setup lang="ts">
  class Valiable {}

  const refs = ref<Valiable>(new Valiable());
</script>
