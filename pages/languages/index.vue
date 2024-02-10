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
          v-for="(language, index) in refs.Languages"
          :key="index"
        >
          <LanguageInformateion :LanguageData="language" />
        </div>
      </div>
    </LanguageLayout>
  </div>
</template>

<script setup lang="ts">
  class Valiable {
    Languages: Array<{
      name: string;
      description: string;
      update_time: string;
      latest_word: string;
    }> = [];
  }

  const refs = ref<Valiable>(new Valiable());

  onMounted(async () => {
    if (refs.value.Languages != null) {
      refs.value.Languages.push({
        name: 'テスト',
        description: 'これはテスト用言語',
        update_time: '2002/05/11 00\:00',
        latest_word: 'surumeneco'
      });
      refs.value.Languages.push({
        name: 'テスト2',
        description: 'これはテスト用言語2',
        update_time: '2015/03/11 00\:00',
        latest_word: 'surumeneco'
      });
      refs.value.Languages.push({
        name: 'テスト3',
        description: 'これはテスト用言語3',
        update_time: '2024/01/01 00\:00',
        latest_word: 'surumeneco'
      });
      const datas = await GetLanguage();
      if (datas != null) {
        datas.forEach((data) => {
          console.log(data);
          refs.value.Languages.push(data);
        });
      }
      console.log(refs.value.Languages);
    }
  });

  const GetLanguage = async function () {
    const responce = await fetch('http://localhost\:8000/GetLanguage');
    const data = await responce.json();
    console.log(data);
    console.log(data.members);
    if (data.status == 'OK') {
      const results = Array<any>();
      if (Array.isArray(data.members)) {
        data.members.forEach((element: any) => {
          results.push({
            name: element.lang_name,
            description: element.description,
            update_time: element.upd_time,
            latest_word: 'surumeneco'
          });
        });
        return results;
      }
    }
  };
</script>
