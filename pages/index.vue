<template>
  <div id="mainPage">
    <Welcome />
    <Spring />
    <Summer />
    <Fall />
    <Winter />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Spring from '~/components/Spring.vue'
import Summer from '~/components/Summer.vue'
import Fall from '~/components/Fall.vue'
import Winter from '~/components/Winter.vue'
import axios from 'axios'

export default {
  components: {
    Welcome,
    Spring,
    Summer,
    Fall,
    Winter
  },
  data() {
    return {
      somedata: ''
    }
  },
  asyncData({ store, env, params, error }) {
    return axios.get(`${env.cockpit.apiUrl}/collections/get/Product?token=${env.cockpit.apiToken}`)
      .then((res) => {
        return store.commit('setProducts', res.data.entries)
      })
  },
  methods: {
    getProducts: function () {
      // get products
    }
  }
}
</script>
