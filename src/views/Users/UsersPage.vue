<template lang="pug">
.users-page
    .fake( v-if="todoList.length" )
    h1.users-page__title Пользователи
    .users-page__items
      UserItem.users-page__item(
        v-for="user, idx in users"
        :key="user.id"
        :user="user"
        @getTasksList="getTodoList"
      )
    TodoList.users-page__todo(
      v-if="todoList.length"
      :tasks="todoList"
      :userName="chosenUser"
      @closeTasksList="closeTodoList"
    )
</template>

<script setup lang="ts">
import store from '@/store'
import { computed } from 'vue'
import UserItem from '@/views/Users/parts/UserItem.vue'
import TodoList from '@/views/Users/parts/TodoList.vue'

const um = store.modules.Users

const getUsers = async () => um.actions.getUsers()
getUsers()
const users = computed( () => um.getters.users )

const getTodoList = async ( id: number ) => await um.actions.getTodoList( id )
const todoList = computed( () => um.getters.todoList )
const chosenUser = computed( () => um.getters.userWithTasks )
const closeTodoList = () => um.actions.cleanTodoList()

</script>

<style lang="sass" scoped>
.users-page
  position: relative
  &__items
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10px
  &__todo
    position: absolute
    top: 200px
    left: 100px
    right: 200px
    z-index: 999

.fake
  position: fixed
  top: 0px
  bottom: 0px
  left: 0px
  right: 0px
  background-color: black
  opacity: 0.7
  z-index: 99
</style>