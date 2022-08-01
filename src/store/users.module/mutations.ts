import { TodoItem, UserItem } from '@/types'
import { Mutations } from 'vuex-smart-module'
import { UsersState } from './state'

export class UsersMutations extends Mutations<UsersState> {

  public setUsers( users: Array<UserItem> ) {
    this.state.users = users
  }

  public setTodoList( todoList: Array<TodoItem> ) {
    this.state.todoList = todoList
    this.state.chosenUserId = todoList[0].userId
  }

  public removeTodoList() {
    this.state.todoList = []
  }

}