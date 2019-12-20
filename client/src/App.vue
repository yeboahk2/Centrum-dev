<template>
  <v-app class="secondary">
    <router-view name="nav"></router-view>
    <v-content class="secondary">
      <router-view></router-view>
    </v-content>
    <!-- <v-btn v-if="loggedin" v-on:click="signout">signout</v-btn> -->
  </v-app>
</template>

<script>
import auth from './firebase.auth.config'

export default {
  name: 'App',

  computed: {
    loggedin: function() {
      if (auth.currentUser) return true
      else return false
    }
  },

  methods: {
    signout: function() {
      auth.signOut().then(() => {
        this.$router.push('/login')
      })
    }
  }
};
</script>
