import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1680c7', //blue
                secondary: '#e4e8eb', //grey
                accent: '#ffffff', // white
                invoicePending: '#a72795',
                invoiceComplete: '#29a534'
            }
        },
        options: {
            customProperties: true,
        }
    },

    icons: {
        iconFont: 'fa'
    }
});
