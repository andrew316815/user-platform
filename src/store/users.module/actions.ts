import { Actions } from 'vuex-smart-module'
import { UsersState } from './state'
import { UsersGetters } from './getters'
import { UsersMutations } from './mutations'
import { usersUrl } from '@/helpers'

export class UsersActions extends Actions<
UsersState,
UsersGetters,
UsersMutations,
UsersActions> {
  public async getUsers() {
    try {
      const response = await fetch( usersUrl )
      const users = await response.json()
      this.mutations.setUsers( users )
    } catch ( error ) {
      console.log( error )
    }
  }

  public async getTodoList( id: number ) {
    try {
      const response = await fetch( `${usersUrl}/${id}/todos` )
      const todoList = await response.json()
      this.mutations.setTodoList( todoList )
    } catch ( error ) {
      console.log( error )
    }
  }

  public cleanTodoList() {
    this.mutations.removeTodoList()
  }

}