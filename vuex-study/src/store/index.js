import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 0,
    todos : [
      { id : 1, text : '123', done : true },
      { id : 2, text : '123', done : false },
      { id : 3, text : '123', done : true }
    ]
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.amount;
    }
  },
  actions: {
    increment({commit}, amount){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment', amount)
          resolve(amount);
        }, 3000)
      })
    }
  },
  modules: {
  },
  getters: {
    doneTodos(state){
      return state.todos.filter((todo) => todo.done);
    },
    getTodoById(state) {
      return function(id){
        return state.todos.find((todo) => todo.id === id)
      }
    }
  }
})

