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
      classRed: "-red",
      classOrange: "-orange",
      classGreen: "-green",
      classBlue: "-blue",
      classPurple: "-purple"
    };
  },
  methods: {
    bgColor: function(cardtype) {
      if (cardtype === "素晴らしい!") {
        return this.classRed;
      } else if (cardtype === "GoodJob!") {
        return this.classOrange;
      } else if (cardtype === "ありがとう!") {
        return this.classGreen;
      } else if (cardtype === "幸せです!") {
        return this.classBlue;
      } else if (cardtype === "おめでとう!") {
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

.-red {
  background-color: rgb(193, 5, 5);
}

.-orange {
  background-color: darkorange;
}
.-green {
  background-color: forestgreen;
}
.-blue {
  background-color: dodgerblue;
}
.-purple {
  background-color: darkorchid;
}
</style>
