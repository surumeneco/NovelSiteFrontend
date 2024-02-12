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
                <Caption Text="言語" />
                <ListBox
                  Name="Class"
                  :Options="refs.LanguageOptions"
                  v-model="refs.LangId"
                  style="width: 100%; margin-right: 8px"
                  @click.stop=""
                />
              </div>
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
                  :Index="index"
                  :Length="refs.Means.length"
                  :ClassOptions="refs.ClassOptions"
                  @DeleteButton_onClick="DeleteMeanButton_onClick(index)"
                  @UpButton_onClick="SwapMeans_onClick(index - 1, index)"
                  @DownButton_onClick="SwapMeans_onClick(index, index + 1)"
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
              <span>語源コンポーネント(TODO)</span>
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
    LangId: string = '';
    Spell: string = '';
    Means: Array<{
      ClassId: string;
      Description: string;
      ShowingFlag: string;
      DisableFlag: string;
      IsNew: string;
      IsCollapse: boolean;
    }> = [];

    ClassOptions: Array<OptionClass> = [];
    LanguageOptions: Array<OptionClass> = [];
  }

  const refs = ref<Valiable>(new Valiable());

  onMounted(() => {
    refs.value.LanguageOptions.push({
      value: '01',
      text: '言語1'
    });
    refs.value.LanguageOptions.push({
      value: '02',
      text: '言語2'
    });
    refs.value.ClassOptions.push({
      value: '01',
      text: 'テスト品詞1'
    });
    refs.value.ClassOptions.push({
      value: '02',
      text: 'テスト品詞2'
    });
    refs.value.Means.push(newMean());
  });

  const newMean = function () {
    return {
      ClassId: '',
      Description: '',
      ShowingFlag: 'false',
      DisableFlag: 'false',
      IsNew: 'true',
      IsCollapse: false
    };
  };

  const AddMeanButton_onClick = function () {
    refs.value.Means.push(newMean());
  };

  const DeleteMeanButton_onClick = function (index: number) {
    refs.value.Means.splice(index, 1);
  };

  const SwapMeans_onClick = function (pri: number, sec: number) {
    [refs.value.Means[sec], refs.value.Means[pri]] = [
      refs.value.Means[pri],
      refs.value.Means[sec]
    ];
  };
</script>
