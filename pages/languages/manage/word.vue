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
            <div class="content-box edit-word">
              <div class="content-title">単語編集</div>
              <div>
                <Caption Text="スペル" />
                <input
                  type="text"
                  class="form-control"
                  placeholder="スペルを入力"
                  name="Spell"
                />
              </div>
              <Caption Text="意味" />
              <div
                v-for="(mean, index) in refs.Means"
                :key="index"
              >
                <ManageLanguageEditWordMean
                  :Mean="mean"
                  :ClassOptions="refs.ClassOptions"
                  @DeleteButton_onClick="DeleteMeanButton_onClick(index)"
                />
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                style="width: 100%"
                name="AddMeanButton"
                @click="AddMeanButton_onClick"
              >
                意味を追加
              </button>
              <p>語源コンポーネント <br /></p>
            </div>
          </div>
        </div>
        <div
          class="col"
          style="margin: 0px; padding: 0px; padding-left: 4px"
        >
          <div class="search-pannel">
            <div class="content-box search-word">
              <div class="content-title">単語検索</div>
            </div>
          </div>
        </div>
      </div>
    </ManageLanguageLayout>
  </div>
</template>

<script setup lang="ts">
  class Valiable {
    Spell: string = '';
    Means: Array<{
      ClassId: string;
      Description: string;
      ShowingFlag: string;
      DisableFlag: string;
      IsNew: string;
    }> = [];

    ClassOptions: Array<OptionClass> = [];
  }

  const refs = ref<Valiable>(new Valiable());

  onMounted(() => {
    refs.value.Means.push(newMean());
    refs.value.ClassOptions.push({
      value: '01',
      text: 'テスト品詞1'
    });
  });

  const newMean = function () {
    return {
      ClassId: '',
      Description: '',
      ShowingFlag: 'false',
      DisableFlag: 'false',
      IsNew: 'true'
    };
  };

  const AddMeanButton_onClick = function () {
    refs.value.Means.push(newMean());
  };

  const DeleteMeanButton_onClick = function (index: number) {
    refs.value.Means.splice(index, 1);
  };
</script>
