<template>
  <div>
    <textarea
      class="form-control"
      :rows="descCount(model)"
      :name="Name"
      style="resize: none"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    Name: {
      type: Object as () => string,
      required: true
    },
    MinRow: {
      type: Object as () => string,
      default: '2'
    }
  });

  const model = defineModel<string>();

  const descCount = function (text: string | undefined) {
    const minrow = Number(Props.MinRow);
    if (text != null) {
      let row = (text.match(/[\r\n]/g) || []).length + 1;
      if (row < minrow) {
        row = minrow;
      }
      return row;
    } else {
      return minrow;
    }
  };
</script>
