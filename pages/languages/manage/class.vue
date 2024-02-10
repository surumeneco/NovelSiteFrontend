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
                v-for="i in 15"
                :key="i"
              >
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="品詞ID"
                    name="GrammerId"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="品詞名"
                    name="GrammerId"
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
                  >
                    削除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
