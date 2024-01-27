import type { TipsSearchBox } from '#build/components';
<template>
  <div>
    <div>
      <h1 class="page-title">{{ PageTitle }}</h1>
    </div>
    <div>
      <TipsSearchBox />
    </div>
    <BreadCrumb
      :CurrentPage="PageTitle"
      :BreadCrumb="PagePath"
    />
    <slot />
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
