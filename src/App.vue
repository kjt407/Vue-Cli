<template>
  <v-app>
    <User></User>
  </v-app>
</template>

<script>
import User from './components/sample1/User.vue' ;
import HomeView from './views/HomeView.vue' ;

export default {
  components: {
    User,
    HomeView  }
  
}
</script>
