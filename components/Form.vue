<template>
  <div class="form">
    <form @submit.prevent="addThanksMsg">
      <div class="form-from">
        <label>From</label>
        <input type="text" v-model="from" />
      </div>
      <div class="form-msg">
        <label>Write Message for Thanks!</label>
        <input type="textarea" v-model="msg" />
      </div>
      <div class="form-to">
        <label>To</label>
        <input type="text" v-model="to" />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "",
      msg: "",
      to: ""
    };
  },
  methods: {
    addThanksMsg() {
      const newThanksMsg = {
        to: this.to,
        msg: this.msg,
        from: this.from
      };

      this.$emit("thanksMsgAdded", newThanksMsg);

      this.from = "";
      this.msg = "";
      this.to = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
