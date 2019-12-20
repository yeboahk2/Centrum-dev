<template>
    <v-app-bar flat class="secondary" app>
        <v-app-bar-nav-icon color="primary" v-on:click="$emit('toggleNav')"><v-icon>fa-stream</v-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn text color="primary">ABOUT</v-btn>
        <v-btn text color="primary">CONTACT</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'ToolBar'
}
</script>

<style scoped>

</style>