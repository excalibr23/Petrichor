<template>
  <section id="welcome" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img src="/plant.jpg" height="100vh" />
      </v-flex>
      <v-flex xs12 md6 align-center layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <v-layout align-center justify-center>
          <v-flex xs10 md6>
            <v-subheader>Welcome!</v-subheader>
            <p>This should probably be a banner or two</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.<br>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
            </p>
            <p>Scroll down to see our featured products by season</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>
