<template>
  <div id="mainPage">
    <Welcome />
    <Spring />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Spring from '~/components/Spring.vue'

export default {
  components: {
    Welcome,
    Spring
  }
}
</script>
