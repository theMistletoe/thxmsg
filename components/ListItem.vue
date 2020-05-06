<template>
  <article class="list-item">
    <section>
      <aside>
        <div class="list-item-to">To: {{ thanksMsg.to }}</div>
        <div class="list-item-msg">
          {{ thanksMsg.msg }}
        </div>
        <div class="list-item-from">From: {{ thanksMsg.from }}</div>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: ["thanksMsg"]
};
</script>

<style lang="css" scoped>
.list-item-msg {
  text-align: center;
}

.list-item-from {
  text-align: right;
}
</style>
