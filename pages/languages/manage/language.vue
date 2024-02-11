<template>
  <div>
    <ManageLanguageLayout
      PageTitle="言語管理"
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
      <div class="edit-pannel">
        <ManageLanguageEditLanguageInfo
          v-model:LanguageName="refs.LanguageName"
          v-model:Description="refs.Description"
        />
        <div class="content-box edit-grammer-list">
          <div class="content-title">文法情報</div>
          <div
            v-for="(grammer, index) in refs.Grammers"
            :key="index"
          >
            <ManageLanguageEditLanguageGrammer
              :-grammer="grammer"
              :-header-options="refs.GrammerHeaderOptions"
              @delete-button_on-click="DeleteGrammerButton_onClick(index)"
            />
          </div>
          <button
            type="button"
            class="btn btn-secondary"
            style="width: 100%"
            name="AddGrammerButton"
            @click="AddGrammerButton_onClick"
          >
            文法を追加
          </button>
        </div>
      </div>
    </ManageLanguageLayout>
  </div>
</template>

<script setup lang="ts">
  class Valiable {
    LanguageName: string = '';
    LanguageId: string = '';
    Description: string = '';
    ShowingFlag: string = '';
    DisableFlag: string = '';

    Grammers: Array<{
      Header: string;
      Id: string;
      Description: string;
      ShowingFlag: string;
      DisableFlag: string;
      IsNew: string;
    }> = [];

    GrammerHeaderOptions: Array<OptionClass> = [];
  }

  const refs = ref<Valiable>(new Valiable());

  onMounted(() => {
    if (refs.value.Grammers.length < 1) {
      refs.value.Grammers.push(newGrammer());
      refs.value.Grammers[0].IsNew = 'false';
    }
    refs.value.GrammerHeaderOptions.push({
      value: 'テスト見出し',
      text: 'テスト見出し'
    });
  });

  const newGrammer = function () {
    return {
      Header: '',
      Id: '',
      Description: '',
      ShowingFlag: 'false',
      DisableFlag: 'false',
      IsNew: 'true'
    };
  };

  const AddGrammerButton_onClick = function () {
    refs.value.Grammers.push(newGrammer());
  };

  const DeleteGrammerButton_onClick = function (index: number) {
    refs.value.Grammers.splice(index, 1);
  };
</script>
