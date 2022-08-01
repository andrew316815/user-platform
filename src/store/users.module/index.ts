import { Module } from 'vuex-smart-module'
import { UsersState } from './state'
import { UsersGetters } from './getters'
import { UsersActions } from './actions'
import { UsersMutations } from './mutations'

export const Users = new Module({
  state: UsersState,
  getters: UsersGetters,
  actions: UsersActions,
  mutations: UsersMutations,
}) 