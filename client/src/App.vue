<template>
  <v-app>
    <router-view name="nav"></router-view>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-btn v-if="loggedin" v-on:click="signout">signout</v-btn>
  </v-app>
</template>

<script>
import auth from './firebase.auth.config'

export default {
  name: 'App',

  components: {
  },

  computed: {
    loggedin: function() {
      if (auth.currentUser) return true
      else return false
    }
  },

  data: () => ({
    //
  }),

  methods: {
    signout: function() {
      auth.signOut().then(() => {
        this.$router.push('/login')
      })
    }
  }
};
</script>
