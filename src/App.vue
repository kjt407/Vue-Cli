<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{count}}</h1>
    <button @click="count ++">추가</button>
    <Home></Home>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
import Home from './Home.vue' ;

export default {
  components: {
    Home,
    Home
},
  data () {
    return {
      title: '안녕하세요',
      count: 1
    }
  }
}
</script>
