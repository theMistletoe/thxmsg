<template>
  <div class="list">
    <ListItem
      v-for="(thanksMsg, index) in thanksMsgs"
      v-bind:key="index"
      :thanksMsg="thanksMsg"
    />
  </div>
</template>

<script>
import ListItem from "~/components/ListItem.vue";

export default {
  components: {
    ListItem
  },
  props: ["thanksMsgs"],
  methods: {}
};
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
</style>
