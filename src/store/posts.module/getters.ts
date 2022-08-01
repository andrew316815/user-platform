import { Getters } from 'vuex-smart-module'
import { PostsState } from './state'

export class PostsGetters extends Getters<PostsState> {
  get posts() {
    return this.state.posts
  }
}