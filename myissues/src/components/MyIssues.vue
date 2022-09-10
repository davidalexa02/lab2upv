<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="tb">
        <md-button class="md-icon-button" @click="showMenu=true; showNavigation">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Issues</span>
      </div>
    </md-toolbar>
    <md-app-content>
      Bienvenido {{ user.name }} {{ user.surname }}
      <div id="issues" class="is">
        <md-list class="md-double-line">
          <issue v-for="i in issues" :key="i.id" :data="i"></issue>
        </md-list>
      </div>
    </md-app-content>
    <md-button class="md-fab md-fab-bottom-right md-primary">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>
<script>
import Issue from "./Issue.vue";
import { issues } from "../services/model.js";

export default {
  components: { issue: Issue },
  name: "MyIssues",
  data() {
    return {
      user: this.$user,
      showMenu: false,
      issues: issues,
    };
  },
  methods:{
   showNavigation () {
      this.$emit('showNav',true)
    }
  }
};
</script>
<style scoped>
.md-app-content {
  padding: 10px;
}
.tb {
  display: flex;
}
.md-title{
  margin-bottom: 0px;
}
</style>