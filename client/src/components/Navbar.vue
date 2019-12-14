<template>
    <v-navigation-drawer
    app
    light
    color="primary"
    :mini-variant.sync="mini"
    expand-on-hover>

        <div class="d-flex align-center">
            <v-img
            v-if="mini"
            alt="Centrum Logo"
            class="shrink mr-2"
            contain
            src="../assets/C-Logo-WHITE.png"
            transition="scale-transition"
            width="80"
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
              <v-icon color="primary" class="circle-icon" size="15">{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title class="nav-text font-weight-regular">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import routes from '../routes'

export default {
    data: function() {
        return {
            routes,
            mini: true
        }
    },

    computed: {
        items: function() {
            return this.routes.filter( route => {
                return route.nav
            })
        }
    }
}
</script>

<style scoped>
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
</style>