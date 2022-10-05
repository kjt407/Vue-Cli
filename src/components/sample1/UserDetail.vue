<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인 합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>이름:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ name }}
        </v-list-tile-content>
      </v-list-tile><br/>
      <v-list-tile>
        <v-list-tile-content>나이:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ age }}
        </v-list-tile-content>
      </v-list-tile><br/>
      <v-list-tile>
        <v-list-tile-content>성별:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ gender }}
        </v-list-tile-content>
      </v-list-tile><br/>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'gender'],
  computed: {
  }
}
</script>
