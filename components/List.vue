<template>
  <div>
    <transition-group tag="ul" class="list">
      <ListItem
        v-if="thanksMsgs.length !== 0"
        v-for="thanksMsg in thanksMsgs"
        v-bind:key="thanksMsg.id"
        :thanksMsg="thanksMsg"
      />
    </transition-group>
    <p v-if="thanksMsgs.length === 0">まだ感謝の言葉は書き込むれていません… 最初の感謝を書き込もう！</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import ListItem from "~/components/ListItem.vue";
import { ThanksMsg } from "../interfaces/ThanksMsg";

type Props = {
  thanksMsgs: ThanksMsg[];
};

export default defineComponent({
  components: {
    ListItem
  },
  props: {
    thanksMsgs: {
      type: Array as PropType<ThanksMsg[]>,
      required: true
    }
  }
});
</script>

<style lang="css" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}

.v-enter-active {
  transition: opacity 1s, transform 1s;
}

.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
