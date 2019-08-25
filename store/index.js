import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Invalid username or password')
      }
      throw error
    }
  },
  async register ({ commit }, { username, password, confirmation, email }) {
    console.log({ username, password, confirmation, email })
    if (confirmation !== password) {
      throw new Error('Passwords do not match')
    }
    try {
      await axios.post('/api/register', { username, password, confirmation, email })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log(error.response.data)
        throw new Error(error.response.data.errors[0].message)
      }
      throw error
    }
  },
  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
