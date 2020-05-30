<template>
  <div class="list-item">
    <div class="list-item-cardtype" :class="cardColor">
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
  computed
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

    const cardColor = computed(() => {
      if (cardtype === "ありがとう!") {
        return "-yellow";
      } else if (cardtype === "嬉しかったよ!") {
        return "-red";
      } else if (cardtype === "ほんとにありがとう!") {
        return "-orange";
      } else if (cardtype === "よくやった!") {
        return "-violet";
      } else if (cardtype === "すごいね!") {
        return "-blue";
      } else if (cardtype === "おめでとう!") {
        return "-green";
      } else if (cardtype === "いい仕事したね!") {
        return "-pink";
      } else if (cardtype === "誇りに思う!") {
        return "-purple";
      } else {
        return "-grey";
      }
    });

    return {
      cardColor
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
