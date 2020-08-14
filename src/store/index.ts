import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "./../firebase";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    users: null,
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindUsers: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("users", db.collection("users"));
    }),
  },
});
