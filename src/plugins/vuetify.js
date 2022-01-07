import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const theme = {
  primary : colors.deepPurple
}

export default new Vuetify({
  breakpoint:{
    // monileBreakpoint reset by 'xs'
    //   mobileBreakpoint: 'xs'

    // reset thresholds
    // thresholds: {
    //   xs: 340,
    //   sm: 540,
    //   md: 800,
    //   lg: 1280,
    // },

  },

  //color presets
  theme: {
    themes: {
      light:theme,
      dark:theme
      // light: {
      //   primary: '#64FFDA',
      //   // secondary: '#FFF9C4',
      //   secondary: colors.green,
      // },
      // dark: {
      // },
    },
  }
});
