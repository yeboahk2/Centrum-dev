<template>
<v-container fluid>
  <v-row justify="center"> 
    <v-col md="4">
      <v-img alt="Centrum Logo" src="../assets/C-Logo-BLUE.png" transition="scale-transition"></v-img>
    </v-col>
  </v-row>

  <v-row justify="center"> 
    <v-col md="auto" class="primary--text text-center">
      <h1 class="font-weight-light display-2">W E L C O M E</h1>
      <h3>Doctor Dentist</h3>
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col md="auto">
      <v-btn class="primary">SUBSCRIBE</v-btn>
    </v-col>
  </v-row>

  <v-row justify="space-around" wrap>

    <v-col md="auto">
      <v-card width="12rem" height="12rem" raised>
        <v-container pa-0 fill-height="auto">
          <v-col class="primary py-auto" md="3" align-self="stretch">
            <v-icon color="secondary" style="height: 100%">fa-newspaper</v-icon>
          </v-col>
          <v-col class="text-center primary--text">
            <h3 class="display-1">News</h3>
          </v-col>
        </v-container>
      </v-card>
    </v-col>

    <v-col md="auto">
      <v-card width="12rem" height="12rem" raised>
        <v-container pa-0 fill-height="auto">
          <v-col class="primary py-auto" md="3" align-self="stretch">
            <v-icon color="secondary" style="height: 100%">fa-calendar-alt</v-icon>
          </v-col>
          <v-col class="text-center primary--text">
            <h3 class="display-1">Events</h3>
          </v-col>
        </v-container>
      </v-card>
    </v-col>

  </v-row>

</v-container>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },
};
</script>

<style scoped>
</style>