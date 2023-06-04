<template>
  <main class="page">
    <header>
      <WorkspaceID :workspaceID="$route.query.workspaceID" />
    </header>
    <Form @thanksMsgAdded="newThanksMsg" />
    <hr />
    <header><h2>感謝の言葉たち</h2></header>
    <List :thanksMsgs="thanksMsgs" />
    <button type="button" @click="capturecanvas">スクリーンショットを取る</button>
  </main>
</template>

<script>
import List from "~/components/List.vue";
import Form from "~/components/Form.vue";
import WorkspaceID from "~/components/WorkspaceID.vue";
import firebase from "~/firebase";
import html2canvas from "html2canvas";

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
    },
    capturecanvas: function() {
      html2canvas(document.body).then(function(canvas) {
        var imgData = canvas.toDataURL();
        window.open().document.write('<img src="' + imgData + '" />');
      });
    }
  }
};
</script>

<style lang="scss"></style>
