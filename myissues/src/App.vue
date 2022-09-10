<template>
  <div id="app">
    <div v-if="user.token">
      <md-app>
        <MyIssues @showNav='onShowNav' />
        <md-app-drawer :md-active.sync="showMenu">
          <md-list>
            <md-list-item to="/myIssues" @click="showMenu = false"
              >My Issues</md-list-item
            >
            <md-list-item to="/workspaces" @click="showMenu = false"
              >Workspaces</md-list-item
            >
            <md-list-item to="/profile" @click="showMenu = false"
              >Profile</md-list-item
            >
            <md-list-item
              to="/myIssues"
              @click="
                $user.token = null;
                showMenu = false;
              "
              >Exit</md-list-item
            >
          </md-list>
        </md-app-drawer>
        <!--<md-app-toolbar>
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="showMenu = !showMenu">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Issues</span>
          </div>
        </md-app-toolbar>-->
        <md-app-content>
          <router-view></router-view>
        </md-app-content>
      </md-app>
    </div>
    <div v-else>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import MyIssues from "@/components/MyIssues";

export default {
  name: "App",
  components: {
    Login,
    MyIssues,
  },
  data: function () {
    return {
      user: this.$user,
      showMenu:false,
    };
  },
  methods:{
    onShowNav (showMenu) {
    this.showMenu = showMenu
    }
  }
};
</script>


<style>
.md-app {
  height: 100vh;
}
.md-app-content {
  padding: 0px;
}
</style>
