<template>
  <main class="page" id="thanks-list-page">
    <header>
      <WorkspaceID :workspaceID="$route.query.workspaceID" />
    </header>
    <Form @thanksMsgAdded="newThanksMsg" />
    <hr />
    <header><h2>感謝の言葉たち</h2></header>
    <List :thanksMsgs="thanksMsgs" />
    <button type="button" @click="capturecanvas">スクリーンショットを取る</button>
    <hr />
    <article>
      <aside>
        <p>※使用後はデータをクリアすることができます。</p>
        <p>※クリアすると感謝の言葉を復元することは出来ません。<br />クリアする前にスクリーンショットを取得して保存しておくことをおすすめします。</p>
        <a @click="clearThanksMsg" color="red"><i>※注意 すべての感謝の言葉をクリアする</i></a>
      </aside>
    </article>
  </main>
</template>

<script>
import List from "~/components/List.vue";
import Form from "~/components/Form.vue";
import WorkspaceID from "~/components/WorkspaceID.vue";
import firebase from "~/firebase";
import domtoimage from 'dom-to-image';

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
    const fetchedDeleteDocIds = [];
    db.collection("workspaces")
      .doc(this.$route.query.workspaceID)
      .collection("thanksMsgs")
      .orderBy("createdAt")
      .onSnapshot(querySnapshot => {
        fetchedThanksMsgs = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          fetchedDeleteDocIds.push(doc.id);
          fetchedThanksMsgs.push(doc.data());
        });
        this.thanksMsgs = fetchedThanksMsgs;
        this.deleteDocIds = fetchedDeleteDocIds;
      });
  },
  data() {
    return {
      thanksMsgs: [],
      deleteDocIds: []
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
      const node = document.getElementById('thanks-list-page');
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          const img = new Image();
          img.src = dataUrl;
          window.open().document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
          window.alert.error('oops, something went wrong!');
        });
    },
    clearThanksMsg: function() {
      const isAbleToDelete = window.confirm('すべての感謝の言葉を削除してよろしいですか？(削除すると復元出来ません)');
      if (isAbleToDelete) {
        const db = firebase.firestore();

        console.log(this.deleteDocIds);
        this.deleteDocIds.forEach((docId) => {
          db.collection("workspaces")
            .doc(this.$route.query.workspaceID)
            .collection("thanksMsgs").doc(docId)
            .delete()
              .then(() => {
                console.log("Document successfully deleted!");
              })
              .catch((error) => {
                console.error("Error removing document: ", error);
              });
        })
      }
    }
  }
};
</script>

<style lang="scss"></style>
