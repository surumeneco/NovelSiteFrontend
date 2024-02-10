<template>
  <div class="content-box edit-language-info">
    <div class="content-title">言語情報</div>
    <div>
      <Caption Text="言語名" />
      <input
        type="text"
        class="form-control"
        placeholder="言語名を入力"
        name="LanguageName"
        v-model="LanguageName"
      />
    </div>
    <div>
      <Caption Text="説明" />
      <ResizableTextarea
        Name="Description"
        MinRow="3"
        v-model="Description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({});

  const LanguageName = defineModel('LanguageName', {
    type: Object as () => string,
    required: true
  });
  const Description = defineModel('Description', {
    type: Object as () => string,
    required: true
  });
</script>
