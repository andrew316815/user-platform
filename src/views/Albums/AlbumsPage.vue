<template lang="pug">
.albums-page
    h1.albums-page__title {{ title }}
    .albums-page__items
      AlbumItem.albums-page__item(
        v-for="album, idx in albums"
        :key="album.id"
        :album="album"
      )
</template>

<script setup lang="ts">
import store from '@/store'
import { computed, onBeforeUnmount, ref } from 'vue'
import AlbumItem from '@/views/Albums/parts/AlbumItem.vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const am = store.modules.Albums

const title = computed( () => router.params.username ? `Альбомы ${userName.value}` : 'Список всех альбомов' )
const userName = ref( '' )
const getAlbums = async () => {
  if ( !router.params.id ) await am.actions.getAlbums()
  else {
    await am.actions.getUserAlbums( +router.params.id )
    userName.value = router.params.username.toString()
  }
} 
getAlbums()
const albums = computed( () => am.getters.albums )

onBeforeUnmount( () => am.actions.cleanAlbums() )

</script>

<style lang="sass" scoped>
.albums-page
  &__items
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10px
    height: calc(100vh - 110px)
    overflow: auto

</style>