import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'users',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/Users/UsersPage.vue' ),
  },
  {
    path: '/posts',
    name: 'posts',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/Posts/PostsPage.vue' ),
    children: [
      {
        path: '/posts/:id',
        name: 'userPosts',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Posts/PostsPage.vue' ),
      },
    ]
  },
  {
    path: '/albums',
    name: 'albums',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/Albums/AlbumsPage.vue' ),
    children: [
      {
        path: '/albums/:id',
        name: 'userAlbums',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Albums/AlbumsPage.vue' ),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes,
})

export default router
