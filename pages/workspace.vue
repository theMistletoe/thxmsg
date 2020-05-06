<template>
  <main class="page">
    <header>
      <h1>WorkspaceID:{{ $route.query.workspaceID }}</h1>
    </header>
    <Form @thanksMsgAdded="newThanksMsg" />
    <hr />
    <h2>感謝ズ</h2>
    <List :thanksMsgs="thanksMsgs" />
    <footer>
      @2019 <a href="https://github.com/theMistletoe">theMistletoe</a> All Right
      Reserved.
    </footer>
  </main>
</template>

<script>
import List from "~/components/List.vue";
import Form from "~/components/Form.vue";
import firebase from "~/firebase";

export default {
  components: {
    List,
    Form
  },
  mounted: function() {
    console.log(this.$route.query.workspaceID);
    if (!this.$route.query.workspaceID) {
      alert("set workspaceID from Top Page!");
      this.$router.push("/");
      return;
    }

    const db = firebase.firestore();

    const fetchedThanksMsgs = [];
    db.collection("workspaces")
      .doc(this.$route.query.workspaceID)
      .collection("thanksMsgs")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          fetchedThanksMsgs.push(doc.data());
        });
      });

    this.thanksMsgs = fetchedThanksMsgs;
  },
  data() {
    return {
      thanksMsgs: []
    };
  },
  methods: {
    newThanksMsg(thanksMsg) {
      const db = firebase.firestore();

      db.collection("workspaces")
        .doc(this.$route.query.workspaceID)
        .collection("thanksMsgs")
        .add(thanksMsg)
        .then(ref => {
          console.log(ref);
          this.thanksMsgs.push(thanksMsg);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss"></style>
