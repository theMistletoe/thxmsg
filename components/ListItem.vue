<template>
  <div class="list-item">
    <div class="list-item-cardtype">{{ thanksMsg.cardtype }}</div>
    <div class="list-item-to">To: {{ thanksMsg.to }}</div>
    <div class="list-item-msg">{{ thanksMsg.msg }}</div>
    <div class="list-item-from">From: {{ thanksMsg.from }}</div>
  </div>
</template>

<script>
export default {
  props: ["thanksMsg"]
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
  background-color: red;
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
</style>
