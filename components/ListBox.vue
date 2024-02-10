<template>
  <div>
    <select
      class="form-select"
      :name="Name"
      v-model="model"
    >
      <option v-if="AllowBlankOption == 'true'"></option>
      <option
        v-for="(option, index) in Options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  const Props = defineProps({
    Name: {
      type: Object as () => string,
      required: true
    },
    Options: {
      type: Object as () => Array<OptionClass>,
      Default: []
    },
    AllowBlankOption: {
      type: Object as () => String,
      Default: false
    }
  });

  const model = defineModel();
</script>
