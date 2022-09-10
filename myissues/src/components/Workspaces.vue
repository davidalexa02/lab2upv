<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="tb">
        <md-button
          class="md-icon-button"
          @click="
            showMenu = true;
            showNavigation;
          "
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Workspaces</span>
      </div>
    </md-toolbar>
    <md-content>
      <div v-for="w in workspaces" :key="w.id" :data="w">
        <md-card md-with-hover>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ w.title }}</div>
            </md-card-header-text>
            <md-card-media>
              <img
                src="/vuematerial/assets/examples/avatar-2.jpg"
                alt="People"
              />
            </md-card-media>
          </md-card-header>
          <md-card-content>{{ w.desc }}</md-card-content>
          <md-card-actions>
            <md-button>Entrar</md-button>
            <md-button :data = data to="/workspace/:id" >Editar</md-button>
            <md-button>Eliminar</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </md-content>
  
  </div>
</template>
<script>
import { workspaces } from "../services/model.js";
import WorkspaceDetails from "./WorkspaceDetails.vue";

export default {
  components: {
    workspaceDetails: WorkspaceDetails,
  },
  props: ["data"],
  name: "Workspaces",
  data() {
    return {
      workspaces: workspaces,
    };
  },
  methods: {
    
  },
};
</script>
<style scoped>
.md-card {
  margin: 10px;
}
</style>