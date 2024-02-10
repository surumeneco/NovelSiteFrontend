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
      <div
        class="container"
        style="margin: 0px; padding: 0px"
      >
        <div
          class="row justify-content-center"
          style="margin: 0px; padding: 0px"
        >
          <div
            class="col"
            style="margin: 0px; padding: 0px"
          >
            <div class="edit-pannel">
              <ManageLanguageEditLanguageInfo
                v-model:LanguageName="refs.LanguageName"
                v-model:Description="refs.Description"
              />
              <div class="content-box edit-grammer-list">
                <div class="content-title">文法情報</div>
                <div
                  class="content-box edit-grammer-info"
                  v-for="(grammer, index) in refs.Grammers"
                  :key="index"
                >
                  <ListBox
                    Name="GrammerHeader"
                    :Options="refs.GrammerHeaderOptions"
                    v-model="grammer.Header"
                  />
                  <Caption Text="文法No." />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="文法No.を入力"
                    name="GrammerId"
                    v-model="grammer.Id"
                  />
                  <div class="form-check form-switch">
                    <input
                      type="checkbox"
                      role="switch"
                      class="form-check-input"
                      id="GrammerShowingFlag"
                      value="true"
                      v-model="grammer.ShowingFlag"
                    />
                    <label
                      class="form-check-label"
                      for="GrammerShowingFlag"
                    >
                      公開フラグ
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      role="switch"
                      id="GrammerDisableFlag"
                      value="true"
                      v-model="grammer.DisableFlag"
                    />
                    <label
                      class="form-check-label"
                      for="GrammerDisableFlag"
                    >
                      無効化フラグ
                    </label>
                  </div>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    name="DeleteGrammerButton"
                    style="padding: 0px 8px"
                    @click="DeleteGrammerButton_onClick(index)"
                  >
                    削除
                  </button>
                  <div>
                    <Caption Text="本文" />
                    <ResizableTextarea
                      Name="GrammerDescription"
                      MinRow="5"
                      v-model="grammer.Description"
                    />
                  </div>
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
          </div>
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
    }> = [];

    GrammerHeaderOptions: Array<OptionClass> = [];
  }

  const refs = ref<Valiable>(new Valiable());

  onMounted(() => {
    if (refs.value.Grammers.length < 1) {
      refs.value.Grammers.push(newGrammer());
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
      DisableFlag: 'false'
    };
  };

  const AddGrammerButton_onClick = function () {
    refs.value.Grammers.push(newGrammer());
  };

  const DeleteGrammerButton_onClick = function (index: number) {
    refs.value.Grammers.splice(index, 1);
  };
</script>
