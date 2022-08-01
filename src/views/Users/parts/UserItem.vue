<template lang="pug">
.user-item
    .user-item__content
      .user-item__el Имя: {{ user.name }}
      .user-item__el Псевдоним: {{ user.username }}
      .user-item__el Электронный адрес: {{ user.email }}
      .user-item__el Почтовый адрес: {{ address }}
      .user-item__el Телефонный номер: {{ user.phone }}
      .user-item__el Сайт: {{ user.website }}
      .user-item__el Место работы: {{ placeOfWork }}
    .user-item__links
      .user-item__todo
        button( @click="getTasksList" ) Открыть список дел
      .user-item__link( @click="toUserPosts" ) К публикациям
      .user-item__link( @click="toUserAlbums" ) К альбомам
</template>

<script setup lang="ts">
import type { UserItem } from '@/types'
import { computed, defineProps, defineEmits, ref } from 'vue'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emit = defineEmits([ 'getTasksList' ])
const props = defineProps({
  user: {
    type: Object as PropType<UserItem>,
    required: true,
    default: () => ({})
  }
})

// user info
const address = computed( () => `${props.user.address.city}, ${props.user.address.street}` )
const placeOfWork = computed( () => props.user.company.name )

// user todos
const getTasksList = () => emit( 'getTasksList', props.user.id )

// links
const toUserPosts = () => router.push({ name: 'userPosts', params: { username: props.user.name, id: props.user.id } })
const toUserAlbums = () => router.push({ name: 'userAlbums', params: { username: props.user.name, id: props.user.id } })


</script>

<style lang="sass" scoped>
.user-item
  display: flex
  justify-content: space-between
  padding: 5px
  border: 1px solid #2ed3cc
  box-shadow: 0 3px 6px -1px #dedfe0
  &__link
    cursor: pointer
    font-size: 13px
    margin-top: 10px
    &:hover
      color: #2d5add
</style>