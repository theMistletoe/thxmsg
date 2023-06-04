<template>
  <div class="form">
    <form @submit.prevent="addThanksMsg">
      <div class="form-card-type">
        <label>Card Type:</label>
        <select v-model="state.cardtype">
          <option selected>ありがとう!</option>
          <option>嬉しかったよ!</option>
          <option>ほんとにありがとう!</option>
          <option>よくやった!</option>
          <option>すごいね!</option>
          <option>おめでとう!</option>
          <option>いい仕事したね!</option>
          <option>誇りに思う!</option>
        </select>
      </div>
      <div class="form-from">
        <label>From</label>
        <input type="text" v-model="state.from" placeholder="例）たかし" />
      </div>
      <div class="form-msg">
        <label>Write Message for Thanks!</label>
        <textarea
          type="textarea"
          v-model="state.msg"
          placeholder="例）いつも助けてくれてありがとう！"
        />
      </div>
      <div class="form-to">
        <label>To</label>
        <input type="text" v-model="state.to" placeholder="例）ひろみ" />
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive } from "@vue/composition-api";
import { ThanksMsg } from "@/interfaces/ThanksMsg";
import { CardType } from "../interfaces/CardType";
import shortid from "shortid";

type Props = {};

export default defineComponent({
  setup(props: Props, context: SetupContext) {
    const state = reactive({
      from: "" as string,
      msg: "" as string,
      to: "" as string,
      cardtype: "ありがとう!" as CardType
    });

    const addThanksMsg = () => {
      if (state.to === "" || state.msg === "" || state.from === "") {
        alert("入力項目は全て必須です！");
        return;
      }

      const now = new Date();
      const newThanksMsg: ThanksMsg = {
        id: shortid.generate(),
        to: state.to,
        msg: state.msg,
        from: state.from,
        cardtype: state.cardtype,
        createdAt: now
      };

      context.emit("thanksMsgAdded", newThanksMsg);

      state.from = "";
      state.msg = "";
      state.to = "";
      state.cardtype = "ありがとう!";
    };

    return {
      state,
      addThanksMsg
    };
  }
});
</script>

<style lang="css" scoped>
.form-card-type {
  margin-bottom: 5px;
}

.form-from {
  margin-bottom: 5px;
}

.form-msg {
  margin-bottom: 5px;
}

.form-msg textarea {
  width: 400px;
  max-width: -webkit-fill-available;
  height: 200px;
}
</style>
