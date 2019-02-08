<template>
  <div id="cart">
    <v-navigation-drawer permenant fixed app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Refine your Search
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider />

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in tags" :key="item" @click="seasonFilter = item.toLowerCase()">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="capitalize">{{ item }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!-- tag banners/bars?  -->
      <v-layout wrap>
        <ProductCard v-for="product in filterProducts" :key="product._id" :product="product" />
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      seasonFilter: ''
    }
  },
  computed: {
    filterProducts: function () {
      const products = this.$store.state.products
      const filterProducts = []
      let hasFilter = false

      if (this.seasonFilter) {
        hasFilter = true
        for (let i = 0; i < products.length; i++) {
          if (products[i].hasOwnProperty('Tags')) {
            if (products[i].Tags.includes(this.seasonFilter)) {
              filterProducts.push(products[i])
            }
          }
        }
      }

      if (hasFilter) {
        return filterProducts
      } else {
        return products
      }
    },
    tags: function () {
      // Use chips
      const products = this.$store.state.products
      const tags = []

      for (let i = 0; i < products.length; i++) {
        if (products[i].hasOwnProperty('Tags')) {
          const productTags = products[i].Tags
          for (let t = 0; t < productTags.length; t++) {
            if (!tags.includes(productTags[t])) {
              tags.push(productTags[t])
            }
          }
        }
      }

      return tags.sort()
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
