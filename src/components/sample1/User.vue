<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-btn @click="changeName()">이름 변경</v-btn>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail :name="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  components: { UserDetail, UserEdit },
  data () {
    return {
      name: '김종태'
    }
  },
  methods: {
    changeName () {
      if(this.name == '김종태') {
        this.name = "태종김"
      } else {
        this.name = "김종태"
      }
    }
  }
}
</script>
