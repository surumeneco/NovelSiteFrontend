<template>
  <div>
    <ManageLanguageLayout
      PageTitle="単語管理"
      :PagePath="[
        {
          name: 'ホーム',
          path: ''
        },
        {
          name: '辞書',
          path: 'languages'
        },
        {
          name: '辞書管理',
          path: 'manage'
        }
      ]"
    >
      <div
        class="row"
        style="margin: 0px; padding: 0px"
      >
        <div
          class="col"
          style="margin: 0px; padding: 0px; padding-right: 4px"
        >
          <div class="edit-pannel">
            <div class="content-box edit-class-list">
              <div class="content-title">単語編集</div>
            </div>
          </div>
        </div>
        <div
          class="col"
          style="margin: 0px; padding: 0px; padding-left: 4px"
        >
          <div class="search-pannel">
            <div class="content-box edit-class-list">
              <div class="content-title">単語検索</div>
            </div>
          </div>
        </div>
      </div>
    </ManageLanguageLayout>
  </div>
</template>

<script setup lang="ts">
  class Valiable {}

  const refs = ref<Valiable>(new Valiable());

  onMounted(() => {});
</script>
