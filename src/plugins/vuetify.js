import {createVuetify} from 'vuetify'
import {aliases , mdi} from 'vuetify/lib/iconsets/mdi.mjs'

export default createVuetify({
    icons: {
   defaultSet :'mdi',
        aliases,
        sets:{
       mdi,
        }
    },
});
