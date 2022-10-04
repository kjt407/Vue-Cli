<template>
  <div>
    <h1>{{ homeTitle }}</h1>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeTitle: 'Home 페이지'
    }
  }
}
</script>
