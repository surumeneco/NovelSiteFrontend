<template>
  <div>
    <div class="language content-box">
      <div class="language-info">
        {{ LanguageData.name }}<br />
        {{ LanguageData.description }}
      </div>
      <NuxtLink to="#"> 文字体系 </NuxtLink>
      <div class="language-update-info">
        最終更新：{{ LanguageData.update_time }}<br />
        最近更新された単語：{{ LanguageData.latest_word }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    LanguageData: {
      type: Object as () => {
        name: string;
        description: string;
        update_time: string;
        latest_word: string;
      },
      required: true
    }
  });
</script>
