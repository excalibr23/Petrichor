<template>
  <v-flex shrink>
    <v-hover>
      <v-card slot-scope="{ hover }" class="productCard" :class="`elevation-${hover ? 12 : 0} ma-${hover ? 2 : 0}` " width="300px" height="400px">
        <v-img class="productImage" :src="product.Image.path" max-height="200px" />
        <v-card-title primary-title>
          <h3 class="subheading text-xs-center">{{ product.Name }}</h3>
        </v-card-title>
        <v-card-text>
          <div>Price: ${{ product.Price }}</div>
        </v-card-text>
        <v-card-actions class="text-xs-center">
          <v-btn color="green" class="white--text snipcart-add-item" large
                 :data-item-name="product.Name"
                 :data-item-price="product.Price"
                 :data-item-id="product._id"
                 :data-item-url="product.Image.path"
                 :data-item-description="product.Description"
          >
            <v-icon>mdi-cart</v-icon> Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
export default {
  props: {
    product: {
      default: function () {},
      type: Object
    }
  }
}
</script>

<style scoped>
 .productCard{
   border-bottom: 1px solid #ddd;
   padding: 1em 1em 50px;
   max-height: 400px;
 }

 .productImage{
 }

 .v-card__title{
   padding: 0;
   margin: 1em 0 0 1em;
 }
</style>
