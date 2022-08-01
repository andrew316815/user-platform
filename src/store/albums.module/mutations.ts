import { AlbumItem } from '@/types'
import { Mutations } from 'vuex-smart-module'
import { AlbumsState } from './state'

export class AlbumsMutations extends Mutations<AlbumsState> {

  public setAlbums( albums: Array<AlbumItem> ) {
    this.state.albums = albums
  }

  public removeAlbums() {
    this.state.albums = []
  }

}