import { TodoItem, UserItem } from '@/types'

export class UsersState {
  users: Array<UserItem> = []
  todoList: Array<TodoItem> = []
  chosenUserId = -1
}