<template>
  <div class="content">
  <md-toolbar class="md-primary">
      <md-button class="md-icon-button">
        <md-icon>back</md-icon>
      </md-button>
      <span class="md-title">Workspace details</span>
    </md-toolbar>
    <md-content>
      <div id="workspace-details">
        <md-field>
          <label>Title</label>
          <md-input v-model="data.title"></md-input>
        </md-field>
        <md-field>
          <label>Description</label>
          <md-textarea v-model="data.desc"></md-textarea>
        </md-field>
         <div class="buttons">
        <md-button class="md-raised md-primary" @click="mode = 'accept'"> Accept </md-button>
        <md-button class="md-raised md-accent" @click="mode = 'cancel'"> Cancel </md-button>
      </div>
      </div>
    </md-content>
  </div>
</template>
<script>
export default {
  name: "WorkspaceDetails",
  props: ["data"],
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>