<template>
  <div>
    <button v-on:click="createWorkspace">Create new workspace!</button>
    <div class="form-workspaceID">
      <label>workspaceID</label>
      <input type="text" v-model="workspaceID" />
      <nuxt-link :to="`/workspace?workspaceID=${workspaceID}`">
        Go to Next
      </nuxt-link>
    </div>
  </div>
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

<style lang="scss"></style>
