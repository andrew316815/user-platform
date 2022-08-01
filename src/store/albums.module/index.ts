import { Module } from 'vuex-smart-module'
import { AlbumsState } from './state'
import { AlbumsGetters } from './getters'
import { AlbumsActions } from './actions'
import { AlbumsMutations } from './mutations'

export const Albums = new Module({
  state: AlbumsState,
  getters: AlbumsGetters,
  actions: AlbumsActions,
  mutations: AlbumsMutations,
}) 