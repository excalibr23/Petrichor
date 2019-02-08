<template>
  <section class="hide-overflow">
    <v-layout>
      <v-flex v-if="imageSide === 'left'" hidden-sm-and-down md6>
        <v-img :src="imageURL" height="100%" />
      </v-flex>
      <v-flex xs12 md6 primary text-xs-center pa-5 white--text>
        <v-subheader>
          {{ season }} Products
        </v-subheader>
        <p>{{ description }}</p>
        <v-card>
          <v-container grid-list-md pa-2>
            <v-layout wrap>
              <v-flex v-for="product in featuredProducts" :key="product._id" :class="productClasses">
                <v-hover>
                  <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4">
                    <v-img :src="product.Image.path" :max-height="productHeight">
                      <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 black--text" style="height: 100%;">
                          ${{ product.Price }}
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-4" style="position: relative;">
                      <v-btn absolute color="green" class="white--text snipcart-add-item" fab large right top
                             :data-item-name="product.Name"
                             :data-item-price="product.Price"
                             :data-item-id="product._id"
                             :data-item-url="product.Image.path"
                             :data-item-description="product.Description"
                      >
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <div class="title font-weight-light green--text mb-1">{{ product.Name }}</div>
                      <div class="font-weight-light black--text mb-2">{{ product.Description }}</div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex v-if="imageSide === 'right'" hidden-sm-and-down md6>
        <v-img :src="imageURL" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  props: {
    season: {
      default: 'none',
      type: String
    },
    description: {
      default: 'description',
      type: String
    },
    imageSide: {
      default: 'left',
      type: String
    }
  },
  data() {
    return {
      imageURL: '/' + this.season + '.jpg'
    }
  },
  computed: {
    featuredProducts: function () {
      const products = this.$store.state.products
      const featuredProducts = []

      for (let i = 0; i < products.length; i++) {
        if (products[i].hasOwnProperty('Tags')) {
          if (products[i].Tags.includes(this.season) && products[i].Tags.includes('featured')) {
            featuredProducts.push(products[i])
          }
        }
      }
      return featuredProducts
    },
    productClasses: function () {
      let productClass = ''
      if (this.featuredProducts.length > 1) {
        productClass = 'xs12 md6'
      } else {
        productClass = 'xs12'
      }
      return productClass
    },
    productHeight: function () {
      let productHeight = ''
      if (this.featuredProducts.length > 1) {
        productHeight = 300
      } else {
        productHeight = 400
      }
      return productHeight
    }
  }
}
</script>

<style scoped>
.v-subheader{
  text-transform: capitalize;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
