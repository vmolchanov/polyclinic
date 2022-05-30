<template>
    <div class="admin">
      <admin-header/>
      <sidebar class="admin__sidebar"/>
      <router-view class="admin__content"/>
    </div>
</template>

<script>
import AdminHeader from './components/admin-header/admin-header';
import Sidebar from './components/sidebar/sidebar';

export default {
  name: 'admin',
  components: {
    AdminHeader,
    Sidebar,
  },
};

</script>

<style scoped>
  .admin {
    --sidebar-width: 256px;
    min-height: 100%;
    padding-left: var(--sidebar-width);
  }

  .admin__sidebar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--sidebar-width);
  }

  .admin__content {
    padding: 20px;
    height: 100%;
  }
</style>
