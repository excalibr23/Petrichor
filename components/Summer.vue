<template>
  <section id="summer" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img src="/summer.jpg" height="100%" />
      </v-flex>
      <v-flex xs12 md6 primary text-xs-center pa-5 white--text>
        <v-subheader>
          Summer Products
        </v-subheader>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipi<br>
          scin elit. Etiam vulputate augue vel felis gravida<br>
          porta. Lorem ipsum dolor sit amet.
        </p>

        <v-card color="">
          <v-container grid-list-md pa-2>
            <v-layout wrap>
              <v-flex v-for="product in summerProducts" :key="product._id" :class="productClasses">
                <a href="">
                  <v-img :src="product.Image.path" :max-height="productHeight" />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  computed: {
    summerProducts: function () {
      const products = this.$store.state.products
      const summerProducts = []

      for (let i = 0; i < products.length; i++) {
        if (products[i].hasOwnProperty('Tags')) {
          if (products[i].Tags.includes('summer')) {
            summerProducts.push(products[i])
          }
        }
      }
      return summerProducts
    },
    productClasses: function () {
      let productClass = ''
      if (this.summerProducts.length > 1) {
        productClass = 'xs12 md6'
      } else {
        productClass = 'xs12'
      }
      return productClass
    },
    productHeight: function () {
      let productHeight = ''
      if (this.summerProducts.length > 1) {
        productHeight = 300
      } else {
        productHeight = 600
      }
      return productHeight
    }
  }
}
</script>
