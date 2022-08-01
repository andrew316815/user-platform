<template lang="pug">
.post-item
    .post-item__content
      h3.post-item__el {{ post.title }}
      .post-item__el {{ post.body }}
</template>

<script setup lang="ts">
import type { UserItem } from '@/types'
import { defineProps, defineEmits } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  post: {
    type: Object as PropType<UserItem>,
    required: true,
    default: () => ({})
  }
})

</script>

<style lang="sass" scoped>
.post-item
  display: flex
  justify-content: space-between
  padding: 5px
  border: 1px solid #2ed3cc
  box-shadow: 0 3px 6px -1px #dedfe0
  
</style>