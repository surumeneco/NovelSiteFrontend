<template>
  <div class="breadcrumb-container">
    <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
    >
      <ol
        class="breadcrumb"
        style="margin: 0px; padding: 0px"
      >
        <li
          v-for="(path, index) in BreadCrumb"
          :key="index"
          class="breadcrumb-item"
        >
          <NuxtLink :to="MakePath(index)">
            {{ path.name }}
          </NuxtLink>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ CurrentPage }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    CurrentPage: {
      type: Object as () => String,
      required: true
    },
    BreadCrumb: {
      type: Object as () => Array<{
        path: string;
        name: string;
      }>,
      Default: []
    }
  });

  function MakePath(index: string | number) {
    let path = '';
    for (let i = 0; i < (index as number) + 1; i++) {
      if (Props.BreadCrumb != null) {
        path += Props.BreadCrumb[i].path + '/';
      }
    }
    return path;
  }
</script>

<style lang="scss" scoped>
  // パンくずリストコンテナ
  .breadcrumb-container {
    background-color: #262626;
    border: 1px solid #777;
    box-shadow: 0px 0px 5px #777;
    border-radius: 10px;
    padding: 0px 8px;
  }
</style>
