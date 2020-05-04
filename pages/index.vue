<template>
  <div class="form-workspaceID">
    <label>workspaceID</label>
    <input type="text" v-model="workspaceID" />
    <nuxt-link :to="`/workspace?workspaceID=${workspaceID}`">
      Go to Next
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workspaceID: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss"></style>
