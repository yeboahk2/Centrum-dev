<template>
<section>
    <v-navigation-drawer
    app
    light
    color="primary"
    :mini-variant.sync="mini"
    class="nav pr=10px"
    floating>
        <div class="d-flex align-center logo-container" v-on:click="goHome">
            <v-img
            v-if="mini"
            alt="Centrum Logo"
            class="shrink mr-2"
            contain
            min-width="75"
            src="../assets/C-Logo-WHITE.png"
            transition="scale-transition"
            width="75"
            />

            <v-img
            v-if="!mini"
            alt="Centrum Name Logo"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            :src="require('../assets/Centrum-Logo-WHITE.png')"
            width="140"
            />
        </div>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.name"
            link
          >
            <v-list-item-icon>
              <v-icon color="primary" class="circle-icon" size="15">{{ item.meta.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title class="nav-text font-weight-regular">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</section>
</template>

<script>
import routes from '../routes'

export default {
    name: 'Navbar',
    props: {
      mini: Boolean
    },
    
    data: function() {
        return {
            routes
        }
    },

    computed: {
        items: function() {
            return this.routes.filter( route => {
              if(route.meta) return route.meta.nav
              else return false
            })
        }
    },

    methods: {
      goHome: function() {
        this.$router.push('/home')
      }
    }
}
</script>

<style scoped>
.nav {
  -webkit-box-shadow: 9px 0px 19px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 9px 0px 19px -7px rgba(0,0,0,0.75);
  box-shadow: 9px 0px 19px -7px rgba(0,0,0,0.75);
}

.logo-container:hover {
  cursor: pointer;
}

.circle-icon {
    background: #ffffff;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    padding: 5px;
}

.nav-text {
    color: white;
    font-size: 20px;
}

.toggle-button {
  float: right;
  left: 30px;
  z-index: 9999;
}
</style>