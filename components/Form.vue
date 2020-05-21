<template>
  <div class="form">
    <form @submit.prevent="addThanksMsg">
      <div class="form-card-tyoe">
        <select v-model="cardtype">
          <option disabled value="">Please select one</option>
          <option>GoodJob!</option>
          <option>ありがとう!</option>
          <option>素晴らしい!</option>
          <option>幸せです!</option>
          <option>おめでとう!</option>
        </select>
        <span>Selected: {{ cardtype }}</span>
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
      cardtype: ""
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
      this.cardtype = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
