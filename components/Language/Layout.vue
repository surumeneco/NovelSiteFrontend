<template>
  <div>
    <div>
      <h1 class="page-title">{{ PageTitle }}</h1>
    </div>
    <div>
      <LanguageSearchBox />
    </div>
    <BreadCrumb
      :CurrentPage="PageTitle"
      :BreadCrumb="PagePath"
    />
    <slot />
    <NuxtLink to="/languages/manage/">辞書管理</NuxtLink>
    <div>ここに更新履歴</div>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    PageTitle: {
      type: String,
      required: true
    },
    PagePath: {
      type: Object as () => Array<{
        path: string;
        name: string;
      }>,
      Default: []
    }
  });
</script>
