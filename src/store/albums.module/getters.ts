import { Getters } from 'vuex-smart-module'
import { AlbumsState } from './state'

export class AlbumsGetters extends Getters<AlbumsState> {
  get albums() {
    return this.state.albums
  }
}