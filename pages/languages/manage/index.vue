<template>
  <div>
    <ManageLanguageLayout
      PageTitle="辞書管理"
      :PagePath="[
        {
          name: 'ホーム',
          path: ''
        },
        {
          name: '辞書',
          path: 'languages'
        }
      ]"
    >
      <div>
        <NuxtLink to="/languages/manage/language"> 言語管理 </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/languages/manage/word"> 単語管理 </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/languages/manage/class"> 品詞管理 </NuxtLink>
      </div>
    </ManageLanguageLayout>
  </div>
</template>

<script setup lang="ts">
  class Valiable {}

  const refs = ref<Valiable>(new Valiable());
</script>
