<template>
  <div class="page">
    <Form @thanksMsgAdded="newThanksMsg" />
    <List :thanksMsgs="thanksMsgs" />
  </div>
</template>

<script>
import List from "~/components/List.vue";
import Form from "~/components/Form.vue";

export default {
  components: {
    List,
    Form
  },
  mounted: function() {
    console.log(this.$route.query.workspaceID);
  },
  data() {
    return {
      thanksMsgs: [
        {
          to: "bob",
          msg: "thanks for your contribution!",
          from: "Alice"
        }
      ] // init thanks msg
    };
  },
  methods: {
    newThanksMsg(thanksMsg) {
      this.thanksMsgs.push(thanksMsg);
    }
  }
};
</script>

<style lang="scss"></style>
