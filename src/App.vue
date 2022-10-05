<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <User></User>
        </v-flex>
      </v-layout>
    </v-container>
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
