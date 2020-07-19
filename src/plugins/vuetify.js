import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import icons from './icons';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.cyan.darken2,
                secondary: colors.deepPurple.darken1,
            },
        },
    },
    icons: {
        iconfont: 'mdi',
        values: icons,
    },
});
