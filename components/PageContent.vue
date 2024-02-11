<template>
  <div class="content-box">
    <NuxtLink
      :to="Link"
      class="content-list-element"
    >
      <div>
        <h2 class="content-title">{{ ContentTitle }}</h2>
      </div>
      <slot />
      <div class="content-description">
        <span
          v-for="description in ContentDescriptions"
          :key="description"
        >
          {{ description }} <br />
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    ContentTitle: {
      type: String,
      required: true
    },
    ContentDescriptions: {
      type: Array<string>,
      required: true
    },
    Link: {
      type: String,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
  //
  .content-list-element {
    color: #ffebd8 !important;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
</style>
