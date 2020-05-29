<template>
  <div>
    <h2>WorkspaceID:{{ workspaceID }}</h2>
    <button type="button" @click="onCopy">URL Copy!</button>
  </div>
</template>

<script>
export default {
  props: ["workspaceID"],
  methods: {
    onCopy() {
      this.$copyText(location.href);
    }
  }
};
</script>

<style lang="css" scoped></style>
