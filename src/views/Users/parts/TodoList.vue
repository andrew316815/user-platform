<template lang="pug">
.todo-list
    .todo-list__header
      h2.todo-list__title Список дел {{ userName }}
      button.todo-list__button( @click="closeTasksList" ) Закрыть
    ul.todo-list__tasks
      li.todo-list__task(
        v-for="task, idx in tasks"
        :key="task.id"
      ) {{ task.title }}
</template>

<script setup lang="ts">
import type { TodoItem } from '@/types'
import { defineProps, defineEmits } from 'vue'
import type { PropType } from 'vue'

const emit = defineEmits([ 'closeTasksList' ])
const props = defineProps({
  tasks: {
    type: Object as PropType<TodoItem>,
    required: true,
    default: () => ({})
  },
  userName: {
    type: String,
    required: true,
    default: 'Неизвестно'
  }
})

const closeTasksList = () => emit( 'closeTasksList' )

</script>

<style lang="sass" scoped>
.todo-list
  padding: 0px 20px
  background-color: white
  &__header
    display: flex
    justify-content: space-between
    align-items: center
  &__button
    height: 48px
  &__tasks
    display: grid
    grid-template-columns: 1fr 1fr
</style>