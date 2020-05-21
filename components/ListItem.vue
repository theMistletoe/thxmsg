<template>
  <div class="list-item">
    <div class="list-item-cardtype" :class="bgColor(thanksMsg.cardtype)">
      {{ thanksMsg.cardtype }}
    </div>
    <div class="list-item-to">To: {{ thanksMsg.to }}</div>
    <div class="list-item-msg">{{ thanksMsg.msg }}</div>
    <div class="list-item-from">From: {{ thanksMsg.from }}</div>
  </div>
</template>

<script>
export default {
  props: ["thanksMsg"],
  data() {
    return {
      classGrey: "-grey",
      classYellow: "-yellow",
      classRed: "-red",
      classOrange: "-orange",
      classViolet: "-violet",
      classBlue: "-blue",
      classGreen: "-green",
      classPink: "-pink",
      classPurple: "-purple"
    };
  },
  methods: {
    bgColor: function(cardtype) {
      if (cardtype === "ありがとう!") {
        return this.classYellow;
      } else if (cardtype === "嬉しかったよ!") {
        return this.classRed;
      } else if (cardtype === "ほんとにありがとう!") {
        return this.classOrange;
      } else if (cardtype === "よくやった!") {
        return this.classViolet;
      } else if (cardtype === "すごいね!") {
        return this.classBlue;
      } else if (cardtype === "おめでとう!") {
        return this.classGreen;
      } else if (cardtype === "いい仕事したね!") {
        return this.classPink;
      } else if (cardtype === "誇りに思う!") {
        return this.classPurple;
      } else {
        return this.classGrey;
      }
    }
  }
};
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
