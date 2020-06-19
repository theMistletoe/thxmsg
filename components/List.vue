<template>
  <transition-group tag="ul" class="list">
    <ListItem
      v-for="(thanksMsg, index) in thanksMsgs"
      v-bind:key="index"
      :thanksMsg="thanksMsg"
    />
  </transition-group>
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
  align-content: space-around;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -webkit-flex-pack: justify;
  -moz-flex-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  justify-content: space-between;
}

.v-enter-active {
  transition: opacity 1s, transform 1s;
}

.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
