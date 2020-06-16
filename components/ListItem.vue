<template>
  <div class="list-item">
    <div class="list-item-cardtype" :class="state.cardColor">
      {{ thanksMsg.cardtype }}
    </div>
    <div class="list-item-to">To: {{ thanksMsg.to }}</div>
    <div class="list-item-msg">{{ thanksMsg.msg }}</div>
    <div class="list-item-from">From: {{ thanksMsg.from }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  PropType,
  onMounted,
  reactive
} from "@vue/composition-api";
import { ThanksMsg } from "@/interfaces/ThanksMsg";
import { CardType } from "../interfaces/CardType";

type Props = {
  thanksMsg: ThanksMsg;
};

export default defineComponent({
  props: {
    thanksMsg: {
      type: Object as PropType<ThanksMsg>,
      required: true
    }
  },
  setup(props: Props, context: SetupContext) {
    const cardtype: CardType = props.thanksMsg.cardtype;

    const state = reactive<{ cardColor: string }>({
      cardColor: "-grey"
    });

    if (cardtype === "ありがとう!") {
      state.cardColor = "-yellow";
    } else if (cardtype === "嬉しかったよ!") {
      state.cardColor = "-red";
    } else if (cardtype === "ほんとにありがとう!") {
      state.cardColor = "-orange";
    } else if (cardtype === "よくやった!") {
      state.cardColor = "-violet";
    } else if (cardtype === "すごいね!") {
      state.cardColor = "-blue";
    } else if (cardtype === "おめでとう!") {
      state.cardColor = "-green";
    } else if (cardtype === "いい仕事したね!") {
      state.cardColor = "-pink";
    } else if (cardtype === "誇りに思う!") {
      state.cardColor = "-purple";
    } else {
      state.cardColor = "-grey";
    }

    return {
      state
    };
  }
});
</script>

<style lang="css" scoped>
.list-item {
  width: 273px;
  height: fit-content;
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow) var(--color-shadow);
  display: block;
}

.list-item-cardtype {
  text-align: center;
  margin-bottom: 1em;
  font-size: large;
  color: aliceblue;
  font-family: Roboto;
  font-style: normal;
  font-weight: bolder;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.list-item-to {
  margin-left: 5px;
}

.list-item-msg {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: 10px;
  margin-right: 10px;
}

.list-item-from {
  text-align: right;
  margin-right: 5px;
  margin-bottom: 5px;
}

.-yellow {
  background-color: rgb(255, 196, 0);
}

.-red {
  background-color: crimson;
}

.-orange {
  background-color: darkorange;
}

.-violet {
  background-color: rgb(156, 81, 226);
}

.-blue {
  background-color: rgb(63, 165, 255);
}

.-green {
  background-color: rgb(51, 154, 51);
}

.-pink {
  background-color: hotpink;
}

.-purple {
  background-color: rgb(152, 72, 136);
}
</style>
