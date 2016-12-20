<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppNavigation from './components/AppNavigation.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppNavigation,
    AppContent,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss'
</style>