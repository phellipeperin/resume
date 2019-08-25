import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import icons from './icons';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0386A6', // colors.indigo.base,
                secondary: colors.pink.darken1,
            },
        },
    },
    icons: {
        iconfont: 'mdi',
        values: icons,
    },
});
