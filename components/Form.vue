<template>
  <div class="form">
    <form @submit.prevent="addThanksMsg">
      <div class="form-card-type">
        <label>Card Type:</label>
        <select v-model="cardtype">
          <option selected>ありがとう!</option>
          <option>GoodJob!</option>
          <option>素晴らしい!</option>
          <option>幸せです!</option>
          <option>おめでとう!</option>
        </select>
      </div>
      <div class="form-from">
        <label>From</label>
        <input type="text" v-model="from" />
      </div>
      <div class="form-msg">
        <label>Write Message for Thanks!</label>
        <textarea type="textarea" v-model="msg" />
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
      to: "",
      cardtype: "ありがとう!"
    };
  },
  methods: {
    addThanksMsg() {
      const newThanksMsg = {
        to: this.to,
        msg: this.msg,
        from: this.from,
        cardtype: this.cardtype
      };

      this.$emit("thanksMsgAdded", newThanksMsg);

      this.from = "";
      this.msg = "";
      this.to = "";
      this.cardtype = "ありがとう!";
    }
  }
};
</script>

<style lang="scss" scoped></style>
