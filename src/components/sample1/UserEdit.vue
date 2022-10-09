<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정합니다.</h3>
    <v-text-field
      label="이름"
      v-model="user.name"
    ></v-text-field>
    <v-text-field
      label="나이"
      v-model="user.age"
    ></v-text-field>
    <v-text-field
      label="성별"
      v-model="user.gender"
    ></v-text-field>
    <v-btn @click="changeUser()">적용</v-btn>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ['name', 'age', 'gender'],
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user.name = this.name
    this.user.age = this.age
    this.user.gender = this.gender
  },
  methods: {
    changeUser() {
      this.$emit('child', this.user)
      // eventBus.$emit("userEdited", new Date())
      eventBus.userEdited(new Date)
    }
  }
}
</script>
