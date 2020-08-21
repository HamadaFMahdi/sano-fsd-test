import Vue from "vue";
import Vuex from "vuex";
import serverAPI from "@/api/export"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menu_hidden: true,
        mobile_menu_hidden: true,
        studies: []
    },
    getters: {
        menu_hidden: (state) => state.menu_hidden
    },
    mutations: {
        UPDATE_STUDIES(state, studies) {
            state.studies = studies
        }
    },
    actions: {
      async GET_STUDIES(ctx) {
          let res = await serverAPI.pub.get_studies()
          ctx.commit('UPDATE_STUDIES', res.data)
      }
    }
});
