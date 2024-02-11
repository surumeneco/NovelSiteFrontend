<template>
  <div class="content-box edit-grammer-info">
    <ListBox
      Name="Header"
      :Options="Props.HeaderOptions"
      v-model="Grammer.Header"
    />
    <Caption Text="文法No." />
    <input
      type="text"
      class="form-control"
      placeholder="文法No.を入力"
      name="Id"
      v-model="Grammer.Id"
    />
    <div class="form-check form-switch">
      <input
        type="checkbox"
        role="switch"
        class="form-check-input"
        id="ShowingFlag"
        value="true"
        v-model="Grammer.ShowingFlag"
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
        v-model="Grammer.DisableFlag"
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
      v-if="Grammer.IsNew == 'true'"
    >
      削除
    </button>
    <div>
      <Caption Text="本文" />
      <ResizableTextarea
        Name="Description"
        MinRow="10"
        v-model="Grammer.Description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    HeaderOptions: {
      type: Array<OptionClass>,
      required: true
    }
  });

  const Grammer = defineModel('Grammer', {
    type: Object as () => {
      Header: string;
      Id: string;
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
</script>
