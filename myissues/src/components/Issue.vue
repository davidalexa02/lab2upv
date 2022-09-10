<template>
  <md-list-item class="item">
    <span class="separator">
      <md-avatar class="md-avatar-icon md-primary">A</md-avatar>
    </span>

    <div class="md-list-item-text">
      <span>{{ data.title }}</span>
      <span>{{ formatDate() }}</span>
    </div>
    <md-menu md-direction="bottom-end">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>
      <md-menu-content>
        <md-menu-item>Aceptar</md-menu-item>
        <md-menu-item>Rechazar</md-menu-item>
        <md-menu-item>Completar</md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-list-item>
</template>
<script>
export default {
  props: ["data"],
  name: "Issue",
  /*data() {
    return {};
  },*/
  methods: {
    formatDate: function () {
      let d = new Date(this.data.ini);
      return (
        d.getDate() +
        "/" +
        (d.getMonth() + 1) +
        "/" +
        d.getYear()
      );
    },
  },
};
</script>
<style scoped>
.separator {
  margin-right: 40px;
}
.item{
  border-bottom:1px solid darkgray;
}
</style>s