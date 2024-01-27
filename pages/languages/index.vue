<template>
  <div>
    <LanguageLayout
      PageTitle="辞書"
      :PagePath="[
        {
          name: 'ホーム',
          path: ''
        }
      ]"
    >
      <div class="language-list">
        <div
          v-for="i in 10"
          :key="i"
        >
          <LanguageInformateion />
        </div>
      </div>
    </LanguageLayout>
  </div>
</template>

<script setup lang="ts"></script>
