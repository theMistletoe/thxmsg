<template>
  <div>
    <h2>WorkspaceID:{{ workspaceID }}</h2>
    <button type="button" @click="onCopy">URL Copy!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from "@vue/composition-api";

type Props = {
  workspaceID: string;
};

export default defineComponent({
  props: {
    workspaceID: {
      type: String,
      required: true
    }
  },
  setup(props: Props, context: SetupContext) {
    const onCopy = () => {
      navigator.clipboard
        .writeText(location.href)
        .then(() => {
          console.log("テキストコピー完了");
        })
        .catch(e => {
          console.error(e);
        });
    };

    return { onCopy };
  }
});
</script>

<style lang="css" scoped></style>
