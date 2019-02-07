<template>
  <div id="mainPage">
    <Welcome />
    <Section season="spring" image-side="right" description="Lorem ipsum dolor sit amet, consectetur adipi scin elit. Etiam vulputate augue vel felis gravida porta. Lorem ipsum dolor sit amet." />
    <Section season="summer" image-side="left" description="Lorem ipsum dolor sit amet, consectetur adipi scin elit. Etiam vulputate augue vel felis gravida porta. Lorem ipsum dolor sit amet." />
    <Section season="fall" image-side="right" description="Lorem ipsum dolor sit amet, consectetur adipi scin elit. Etiam vulputate augue vel felis gravida porta. Lorem ipsum dolor sit amet." />
    <Section season="winter" image-side="left" description="Lorem ipsum dolor sit amet, consectetur adipi scin elit. Etiam vulputate augue vel felis gravida porta. Lorem ipsum dolor sit amet." />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Section from '~/components/Section.vue'
import axios from 'axios'

export default {
  components: {
    Welcome,
    Section
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
