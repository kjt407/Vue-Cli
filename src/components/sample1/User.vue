<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
        :name="name"
        :age="age"
        :gender="gender"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
        :name="name"
        :age="age"
        :gender="gender"
        @child="apply"
        ></UserEdit>
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
      name : '김종태',
      age : 25,
      gender : '남'
    }
  },
  methods: {
    apply(user) {
      this.name = user.name
      this.age = user.age
      this.gender = user.gender
    }
  }
}
</script>
