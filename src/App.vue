<template>
  <v-app>
    <!-- Navigation -->
    <v-tabs 
      class="pt-12"
      fixed-tabs
      height="50">
      <v-tab  
        :ripple="false"
        v-for="(tab, i) of tabs"
        :key="i" :to="{ name: tab.name }">
          <span v-if="tab.label" class="text-body-1 font-weight-bold">{{ tab.label }}</span>
      </v-tab>
    </v-tabs>

    <!-- Content -->
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      tabs: [
        {name: 'Route1', label: 'readme!'},        
        {name: 'Route2', label: 'scrollymapbox'},
        {name: 'Route3', label: 'steppermapbox'},    
      ],    
    }
  }
};
</script>

<style lang="scss">
@import 'styles/_grid.scss';
@import 'styles/_typography.scss';

.v-tabs {
  flex: 0 1 auto !important;
}
</style>
