<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Vuelidate />
  </div>
</template>

<script>
// @ is an alias to /src
import Vuelidate from '@/components/Vuelidate.vue'

export default {
  name: 'HomeView',
  components: {
    Vuelidate
  }
}
</script>
