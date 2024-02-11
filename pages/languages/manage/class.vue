<template>
  <div>
    <ManageLanguageLayout
      PageTitle="品詞管理"
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
        <div class="content-box edit-class-list">
          <div class="content-title">品詞一覧</div>
          <table
            class="table table-striped table-bordered"
            style="text-align: center"
          >
            <thead>
              <tr>
                <th scope="col">品詞ID</th>
                <th scope="col">品詞名</th>
                <th scope="col">公開</th>
                <th scope="col">無効</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr
                v-for="(element, index) in refs.Classes"
                :key="index"
              >
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="品詞ID"
                    name="ClassId"
                    v-model="element.Id"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="品詞名"
                    name="ClassName"
                    v-model="element.Name"
                  />
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <div class="form-check form-switch">
                      <input
                        type="checkbox"
                        role="switch"
                        class="form-check-input"
                        id="ClassShowingFlag"
                        value="true"
                        v-model="element.ShowingFlag"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <div class="form-check form-switch">
                      <input
                        type="checkbox"
                        role="switch"
                        class="form-check-input"
                        id="ClassDisableFlag"
                        value="true"
                        v-model="element.DisableFlag"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    name="DeleteGrammerButton"
                    style="padding: 0px 8px"
                    v-if="element.IsNew == 'true'"
                    @click="DeleteClassButton_onClick(index)"
                  >
                    削除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            class="btn btn-secondary"
            style="width: 100%"
            name="AddClassButton"
            @click="AddClassButton_onClick"
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
    Classes: Array<{
      Id: string;
      Name: string;
      ShowingFlag: string;
      DisableFlag: string;
      IsNew: string;
    }> = [];
  }

  const refs = ref<Valiable>(new Valiable());

  onMounted(() => {
    refs.value.Classes.push(newClass());
    // refs.value.Classes[0].IsNew = 'false';
  });

  const newClass = function () {
    return {
      Id: '',
      Name: '',
      ShowingFlag: 'false',
      DisableFlag: 'false',
      IsNew: 'true'
    };
  };

  const DeleteClassButton_onClick = function (index: number) {
    refs.value.Classes.splice(index, 1);
  };

  const AddClassButton_onClick = function () {
    refs.value.Classes.push(newClass());
  };
</script>
