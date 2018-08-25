import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Sign-up',
      component: SignUp
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
});
