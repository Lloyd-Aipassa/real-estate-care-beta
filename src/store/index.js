import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        schadeOpgenomen: [
        ],
    },

  getters: {
    allSchades: (state) => state.schadeOpgenomen 
  },

  //aanroepen functies
  //aanroepen functies
  actions: {
    async fetchSchades({ commit }) {
        const response = await axios.get('https://kind-tan-goshawk-tux.cyclic.app/schade?_sort=Datum&_order=asc')
        commit('setSchades', response.data)
    },

    async addSchadeOpnemen ({ commit }, newSchade ) {
        const response = await axios.post('https://kind-tan-goshawk-tux.cyclic.app/schade', {...newSchade})

        commit('newSchadeOpnemen', response.data)
    },
    
    
  async deleteRapport({ commit }, _id) {
    await axios.delete(`https://kind-tan-goshawk-tux.cyclic.app/schade${_id}`);
    commit('removeSchadeOpnemen', _id)
  }

},


    // functies
    mutations: {
      setSchades: (state, schadeOpgenomen ) => (state.schadeOpgenomen = schadeOpgenomen),
      newSchadeOpnemen: (state, schade ) => state.schadeOpgenomen.unshift(schade), 
      removeSchadeOpnemen:(state, _id) => state.schadeOpgenomen = state.schadeOpgenomen.filter(Schade => Schade._id !==_id)
    },

  //toevoegen van modules
  modules: {}
})
