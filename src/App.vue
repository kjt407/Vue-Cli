<template>
  <v-app>
    <v-container class="grey">
        <!-- <v-flex xs12> -->
          <User v-if="index = 0"></User>
          <Grid v-else-if="index = 1"></Grid>
        <!-- </v-flex> -->
    </v-container>
  </v-app>
</template>

<script>
import User from './components/sample1/User' ;
import HomeView from './views/HomeView' ;
import Grid from './components/sample_layout/Grid';

export default {
  components: {
    User,
    HomeView,
    Grid
},
  data() {
    return {
      index: 1,
    }
  }
  
}
</script>
