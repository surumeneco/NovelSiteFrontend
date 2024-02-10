<template>
  <label class="caption">
    {{ Text }}
  </label>
</template>

<script setup lang="ts">
  const Props = defineProps({
    Text: {
      type: Object as () => String,
      required: true
    }
  });
</script>
