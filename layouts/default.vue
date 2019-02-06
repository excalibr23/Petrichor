<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-scroll="onScroll"
      :color="isTransparent ? 'transparent' : ''"
      app
      flat
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <!--RAIN CODE START-->
    <!-- eslint-disable-next-line -->
    <div class="rain front-row" v-html="drops" />
    <!-- eslint-disable-next-line -->
    <div class="rain back-row" v-html="backDrops" />
    <!--RAIN CODE END-->
    <nuxt />
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>
              compare_arrows
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer id="footer" height="88px">
      <v-spacer />
      <span>Copyright Petrichor Boutique &copy; 2019</span>
    </v-footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
    <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NWFjYzQ3ZDgtYWNiZS00M2Y4LWE0NjItMzg5MjViZDY1MmY5NjM2ODQ5NzMwMjI2Mzc5Njc3" />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      isTransparent: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      drops: 0,
      backDrops: 0
    }
  },
  mounted() {
    this.makeItRain()
  },
  methods: {
    onScroll: function () {
      this.isTransparent = window.pageYOffset < 200
    },
    makeItRain: function () {
      let increment = 0
      let drops = ''
      let backDrops = ''

      while (increment < 100) {
        // couple random numbers to use for various randomizations
        // random number between 98 and 1
        const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1)
        // random number between 5 and 2
        const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2)
        // increment
        increment += randoFiver
        // add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 90) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>'
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 90) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>'
      }

      this.drops = drops
      this.backDrops = backDrops
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  background: linear-gradient(to bottom, #202020, #111119);
}

.rain {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.rain.back-row {
  display: none;
  z-index: 1;
  bottom: 60px;
  opacity: 0.5;
}

body.back-row-toggle .rain.back-row {
  display: block;
}

.drop {
  position: absolute;
  bottom: 100%;
  width: 15px;
  height: 120px;
  pointer-events: none;
  animation: drop 0.5s linear infinite;
}

@keyframes drop {
  0% {
    transform: translateY(0vh);
  }
  75% {
    transform: translateY(90vh);
  }
  100% {
    transform: translateY(90vh);
  }
}

.stem {
  width: 1px;
  height: 60%;
  margin-left: 7px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
  animation: stem 0.5s linear infinite;
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.splat {
  width: 15px;
  height: 10px;
  border-top: 2px dotted rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  animation: splat 0.5s linear infinite;
  display: none;
}

body.splat-toggle .splat {
  display: block;
}

@keyframes splat {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

.toggles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.toggle {
  position: absolute;
  left: 20px;
  width: 50px;
  height: 50px;
  line-height: 51px;
  box-sizing: border-box;
  text-align: center;
  font-family: sans-serif;
  font-size: 10px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.toggle:active {
  background-color: rgba(255, 255, 255, 0.3);
}

.toggle.active {
  background-color: rgba(255, 255, 255, 0.4);
}

.splat-toggle {
  top: 20px;
}

.back-row-toggle {
  top: 90px;
  line-height: 12px;
  padding-top: 14px;
}

.single-toggle {
  top: 160px;
}

body.single-toggle .drop {
  display: none;
}

body.single-toggle .drop:nth-child(10) {
  display: block;
}

#footer{
  padding-right: 10px;
}
</style>
