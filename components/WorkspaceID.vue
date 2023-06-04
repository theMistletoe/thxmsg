<template>
  <div>
    <h2>WorkspaceID:{{ workspaceID }}</h2>
    <a type="button" @click="onCopy">ワークスペースのURLをコピー</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from "@vue/composition-api";
import { CopyURL } from "@/composition/CopyURL";

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
    const onCopy = CopyURL();
    return { onCopy };
  }
});
</script>

<style lang="css" scoped>
a:active {color:#ffff00;}
</style>
