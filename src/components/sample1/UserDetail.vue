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
      <v-list-tile>
        <v-list-tile-content>수정일자:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ editedDate }}
        </v-list-tile-content>
      </v-list-tile><br/>
    </v-list>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ['name', 'age', 'gender'],
  data() {
    return {
      editedDate: null
    }
  },
  computed: {
  },
  created() {
    eventBus.$on('userEdited', (date) => {
      this.editedDate = date
    })
  }
}
</script>
