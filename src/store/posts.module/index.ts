import { Module } from 'vuex-smart-module'
import { PostsState } from './state'
import { PostsGetters } from './getters'
import { PostsActions } from './actions'
import { PostsMutations } from './mutations'

export const Posts = new Module({
  state: PostsState,
  getters: PostsGetters,
  actions: PostsActions,
  mutations: PostsMutations,
}) 