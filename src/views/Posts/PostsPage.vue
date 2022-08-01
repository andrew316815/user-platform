<template lang="pug">
.posts-page
    h1.posts-page__title {{ title }}
    .posts-page__items
      PostItem.posts-page__item(
        v-for="post, idx in posts"
        :key="post.id"
        :post="post"
      )
</template>

<script setup lang="ts">
import store from '@/store'
import { computed, onBeforeUnmount, ref } from 'vue'
import PostItem from '@/views/Posts/parts/PostItem.vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const pm = store.modules.Posts

const title = computed( () => router.params.username ? `Публикации ${userName.value}` : 'Список всех публикаций' )
const userName = ref( '' )
const getPosts = async () => {
  if ( !router.params.id ) await pm.actions.getPosts()
  else {
    await pm.actions.getUserPosts( +router.params.id )
    userName.value = router.params.username.toString()
  }
} 
getPosts()
const posts = computed( () => pm.getters.posts )

onBeforeUnmount( () => pm.actions.cleanPosts() )

</script>

<style lang="sass" scoped>
.posts-page
  &__items
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10px
    height: calc(100vh - 110px)
    overflow: auto

</style>