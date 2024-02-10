<template>
  <div>
    <div>
      <h1 class="page-title">{{ PageTitle }}</h1>
    </div>
    <BreadCrumb
      :CurrentPage="PageTitle"
      :BreadCrumb="PagePath"
    />
    <slot />
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
