import { Actions } from 'vuex-smart-module'
import { AlbumsState } from './state'
import { AlbumsGetters } from './getters'
import { AlbumsMutations } from './mutations'
import { albumsUrl, usersUrl } from '@/helpers'

export class AlbumsActions extends Actions<
AlbumsState,
AlbumsGetters,
AlbumsMutations,
AlbumsActions> {

  public async getAlbums() {
    try {
      const response = await fetch( albumsUrl )
      const posts = await response.json()
      this.mutations.setAlbums( posts )
    } catch ( error ) {
      console.log( error )
    }
  }

  public async getUserAlbums( id: number ) {
    try {
      const response = await fetch( `${usersUrl}/${id}/posts` )
      const posts = await response.json()
      this.mutations.setAlbums( posts )
    } catch ( error ) {
      console.log( error )
    }
  }

  public cleanAlbums(): number {
    this.mutations.removeAlbums()
    return 0
  }

}