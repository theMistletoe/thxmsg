<template>
  <div class="list-item">
    <div class="list-item-to">To: {{ thanksMsg.to }}</div>
    <div class="list-item-msg">
      {{ thanksMsg.msg }}
    </div>
    <div class="list-item-from">from: {{ thanksMsg.from }}</div>
  </div>
</template>

<script>
export default {
  props: ["thanksMsg"]
};
</script>

<style lang="scss" scoped></style>
