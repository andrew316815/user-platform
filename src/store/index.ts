import { createStore, Module } from 'vuex-smart-module'
import { Users } from './users.module'
import { Posts } from './posts.module'
import { Albums } from './albums.module'

const root = new Module({
  modules: {
    Users,
    Posts,
    Albums
  }
})


export const store = createStore( root )
export default root.context( store )
