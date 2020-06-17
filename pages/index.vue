<template>
  <main>
    <header>
      <h1>感謝の気持ちを伝えよう！</h1>
    </header>
    <div class="wrapper">
      <section>
        <aside>
          <h2>新しいワークスペースを作る</h2>
          <button v-on:click="createWorkspace">Create new workspace!</button>
        </aside>
      </section>
      <section>
        <aside>
          <h2>どこかのワークスペースに参加する</h2>
          <div class="form-workspaceID">
            <label>workspaceID</label>
            <input type="text" v-model="workspaceID" />
            <nuxt-link :to="`/workspace?workspaceID=${workspaceID}`">
              Go to workspace!
            </nuxt-link>
          </div>
        </aside>
      </section>
    </div>
    <hr />
    <header><h2>How to use</h2></header>

    <ol>
      <li>新しいワークスペースを作成する</li>
      <li>ワークスペースのURL、またはIDを参加者に連携する</li>
      <li>参加者各々、感謝のカードタイプを選んで、メッセージを送信する</li>
      <li>出てきたカードを眺めながら、チームで労いの言葉を掛け合う</li>
      <li>ポジティブな気分でスプリントを終える</li>
    </ol>
  </main>
</template>

<script>
import shortid from "shortid";

export default {
  data() {
    return {
      workspaceID: ""
    };
  },
  methods: {
    createWorkspace() {
      const newWorkspaceID = shortid.generate();
      this.$router.push(`/workspace?workspaceID=${newWorkspaceID}`);
    }
  }
};
</script>

<style lang="css">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
