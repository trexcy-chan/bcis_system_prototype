import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";
import { signOut,} from "firebase/auth";

export default createStore({
  state: {
      user: null
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async setuser({ commit }) {
      commit("SET_USER", auth.currentUser);
      // this.$router.push("/");

    },

    async signin({ commit }) {
      commit("SET_USER", auth.currentUser);
      router.push("/homepage");
      // this.$router.push("/");

    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push("/loginpage");
    },
    
    async admin_logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push("/admin-login");
    },
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);

          if (router.isReady() && router.currentRoute.value.path === "/loginpage") {
            router.push("/homepage");
          }
        }
      });
    },
  },
  modules: {
  }
})
