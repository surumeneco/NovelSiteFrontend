<template>
  <div class="accordion mean-container">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button set-default"
          :class="{
            collapsed: !refs.isCollapse
          }"
          type="button"
          style="padding: 0px 8px 0px 0px"
          @click="AccordionButton_onClick"
        >
          <ListBox
            Name="Class"
            :Options="Props.ClassOptions"
            v-model="Mean.ClassId"
            style="width: 100%; margin-right: 8px"
            @click.stop=""
          />
        </button>
      </h2>
      <div
        class="accordion-collapse collapse set-default"
        :class="{
          show: refs.isCollapse
        }"
      >
        <div
          class="accordion-body"
          style="padding: 8px"
        >
          <div class="form-check form-switch">
            <input
              type="checkbox"
              role="switch"
              class="form-check-input"
              id="ShowingFlag"
              value="true"
              v-model="Mean.ShowingFlag"
            />
            <label
              class="form-check-label"
              for="ShowingFlag"
            >
              公開フラグ
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              type="checkbox"
              class="form-check-input"
              role="switch"
              id="DisableFlag"
              value="true"
              v-model="Mean.DisableFlag"
            />
            <label
              class="form-check-label"
              for="DisableFlag"
            >
              無効化フラグ
            </label>
          </div>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            name="DeleteButton"
            style="padding: 0px 8px"
            @click="emits('DeleteButton_onClick', null)"
            v-if="Mean.IsNew == 'true'"
          >
            削除
          </button>
          <div>
            <Caption Text="意味詳細" />
            <div class="edit-word-mean">
              <ResizableTextarea
                Name="Description"
                MinRow="5"
                v-model="Mean.Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  class Valiable {
    isCollapse: boolean = true;
  }

  const refs = ref<Valiable>(new Valiable());

  const Props = defineProps({
    ClassOptions: {
      type: Array<OptionClass>,
      required: true
    }
  });

  const Mean = defineModel('Mean', {
    type: Object as () => {
      ClassId: string;
      Description: string;
      ShowingFlag: string;
      DisableFlag: string;
      IsNew: string;
    },
    required: true
  });

  const emits = defineEmits<{
    (e: 'DeleteButton_onClick', v: null): void;
  }>();

  const AccordionButton_onClick = function () {
    refs.value.isCollapse = !refs.value.isCollapse;
  };
</script>

<style lang="scss" scoped>
  .mean-container {
    margin: 0px 0px 8px;
  }
  .set-default {
    background-color: #444444;
    border: 1px solid #777;
    box-shadow: inset 0px 0px 5px #777;
  }
</style>
