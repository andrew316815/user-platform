<template lang="pug">
.album-item
    .album-item__content
      h3.album-item__el Название альбома: {{ album.title }}
</template>

<script setup lang="ts">
import type { AlbumItem } from '@/types'
import { defineProps } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  album: {
    type: Object as PropType<AlbumItem>,
    required: true,
    default: () => ({})
  }
})

</script>

<style lang="sass" scoped>
.album-item
  display: flex
  justify-content: space-between
  padding: 5px
  border: 1px solid #2ed3cc
  box-shadow: 0 3px 6px -1px #dedfe0
</style>