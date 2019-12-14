import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1680c7', //blue
                secondary: '#e4e8eb', //grey
                accent: '#ffffff' // white
            }
        }
    },

    icons: {
        iconFont: 'fa'
    }
});
