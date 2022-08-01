import { PostItem } from '@/types'
import { Mutations } from 'vuex-smart-module'
import { PostsState } from './state'

export class PostsMutations extends Mutations<PostsState> {
  
  public setPosts( posts: Array<PostItem> ) {
    this.state.posts = posts
  }

  public removePosts() {
    this.state.posts = []
  }

}