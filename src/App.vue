<template lang="pug">
.app
    nav
      router-link( to="/" ) Пользователи
      router-link( to="/posts" ) Публикации
      router-link( to="/albums" ) Альбомы
    main
      router-view
</template>

<style lang="sass">
html, body
  margin: 0px
  padding: 0px

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  


.app
  display: flex
  height: 100vh

nav
  padding: 40px 30px
  width: 15%
  background-color: #364b4c
  display: flex
  flex-direction: column
  align-items: flex-start

  a 
    font-weight: bold
    color: white
    opacity: 0.7
    text-decoration: none
    font-size: 20px
    margin-bottom: 20px

    &.router-link-active, &:hover
      opacity: 1


button
  padding: 5px 10px
  background-color: white
  outline: none
  border: 1px solid #479b9b
  cursor: pointer
  transition: 0.2s
  &:hover
    background-color: #d2dce1

main
  padding: 0px 30px
  width: 85%
</style>
