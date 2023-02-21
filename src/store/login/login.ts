import { Module } from "vuex"

import { IRootState } from "../types"
import { ILoginState } from "./types"

//这里Module的参数是必传的
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state () {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction ({ commit }, payload: any) {
      console.log('execution action', payload)

    }
  }
}

export default loginModule
