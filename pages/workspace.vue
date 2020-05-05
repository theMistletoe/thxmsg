<template>
  <div class="page">
    <Form @thanksMsgAdded="newThanksMsg" />
    <List :thanksMsgs="thanksMsgs" />
  </div>
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
    const db = firebase.firestore();

    const fetchedThanksMsgs = [];
    db.collection("workspaces")
      .doc("127635123") // TODO: chamge to this.$route.query.workspaceID
      .collection("thanksMsgs")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          fetchedThanksMsgs.push(doc.data());
        });
      });

    this.thanksMsgs = fetchedThanksMsgs;

    // const test = {
    //   to: "bob",
    //   msg: "thanks for your contribution!",
    //   from: "Alice"
    // };

    // db.collection("workspaces")
    //   .doc("127635123")
    //   .collection("thanksMsgs")
    //   .add(test)
    //   .then(ref => {
    //     console.log(ref);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  data() {
    return {
      thanksMsgs: [
        // {
        //   to: "bob",
        //   msg: "thanks for your contribution!",
        //   from: "Alice"
        // }
      ] // init thanks msg
    };
  },
  methods: {
    newThanksMsg(thanksMsg) {
      this.thanksMsgs.push(thanksMsg);
    }
  }
};
</script>

<style lang="scss"></style>
