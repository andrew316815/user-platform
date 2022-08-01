import { Getters } from 'vuex-smart-module'
import { UsersState } from './state'

export class UsersGetters extends Getters<UsersState> {
  get users() {
    return this.state.users
  }

  get todoList() {
    return this.state.todoList
  }

  get userWithTasks() {
    return this.state.users.find( ( user ) => user.id === this.state.chosenUserId )?.name
  }
}