<template>
  <main class="page">
    <header>
      <WorkspaceID :workspaceID="$route.query.workspaceID" />
    </header>
    <Form @thanksMsgAdded="newThanksMsg" />
    <hr />
    <header><h2>感謝の言葉たち</h2></header>
    <List :thanksMsgs="thanksMsgs" />
  </main>
</template>

<script>
import List from "~/components/List.vue";
import Form from "~/components/Form.vue";
import WorkspaceID from "~/components/WorkspaceID.vue";
import firebase from "~/firebase";

export default {
  components: {
    List,
    Form,
    WorkspaceID
  },
  mounted: function() {
    if (!this.$route.query.workspaceID) {
      alert("set workspaceID from Top Page!");
      this.$router.push("/");
      return;
    }

    const db = firebase.firestore();

    let fetchedThanksMsgs = [];
    db.collection("workspaces")
      .doc(this.$route.query.workspaceID)
      .collection("thanksMsgs")
      .orderBy("createdAt")
      .onSnapshot(querySnapshot => {
        fetchedThanksMsgs = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          fetchedThanksMsgs.push(doc.data());
        });
        this.thanksMsgs = fetchedThanksMsgs;
      });
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
          // this.thanksMsgs.push(thanksMsg);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss"></style>
