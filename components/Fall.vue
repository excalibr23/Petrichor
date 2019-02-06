<template>
  <section id="fall" class="hide-overflow">
    <v-layout>
      <v-flex xs12 md6 primary text-xs-center pa-5 white--text>
        <v-subheader>
          Fall Products
        </v-subheader>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipi<br>
          scin elit. Etiam vulputate augue vel felis gravida<br>
          porta. Lorem ipsum dolor sit amet.
        </p>

        <v-card color="">
          <v-container grid-list-md pa-2>
            <v-layout wrap>
              <!--<v-flex v-for="project in projects" :key="project" xs12 md6>
                <a href="#">
                  <v-img :src="require(`@/assets/${project}.jpeg`)" max-height="300"/>
                </a>
              </v-flex>-->
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md6>
        <v-img src="/fall.jpg" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>
