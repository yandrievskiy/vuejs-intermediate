import Home from '@/views/static/Home.vue';
import Auth from '@/views/auth/Auth.vue';
import Posts from '@/views/posts/Posts.vue';
import Post from '@/views/posts/Post.vue';
import NotFound from '@/views/static/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home.index',
    component: Home,
  },
  {
    path: '/registration',
    name: 'auth.index',
    component: Auth,
  },
  {
    path: '/posts/:id?',
    name: 'posts.index',
    component: Posts,
  },
  {
    path: '/post/:id',
    name: 'posts.details',
    component: Post,
  },
  {
    path: '*',
    name: '/not-found',
    component: NotFound,
  },
];


export default routes;
