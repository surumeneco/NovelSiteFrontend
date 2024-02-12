<template>
  <button
    type="button"
    class="btn btn-info"
    style="width: 100%; margin: 8px 0px"
    name="scrollTopButoon"
    @click="scroll_top"
  >
    上部に戻る
  </button>
</template>

<script setup lang="ts">
  const scroll_top = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>
