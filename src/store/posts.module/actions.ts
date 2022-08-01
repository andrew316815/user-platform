import { Actions } from 'vuex-smart-module'
import { PostsState } from './state'
import { PostsGetters } from './getters'
import { PostsMutations } from './mutations'
import { postsUrl, usersUrl } from '@/helpers'

export class PostsActions extends Actions<
PostsState,
PostsGetters,
PostsMutations,
PostsActions> {

  public async getPosts() {
    try {
      const response = await fetch( postsUrl )
      const posts = await response.json()
      this.mutations.setPosts( posts )
    } catch ( error ) {
      console.log( error )
    }
  }

  public async getUserPosts( id: number ) {
    try {
      const response = await fetch( `${usersUrl}/${id}/posts` )
      const posts = await response.json()
      this.mutations.setPosts( posts )
    } catch ( error ) {
      console.log( error )
    }
  }

  public cleanPosts(): number {
    this.mutations.removePosts()
    return 0
  }

}