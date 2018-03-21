import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

/* Routes pages */
import Welcome from './pages/Welcome/Welcome.vue'
import Home from './pages/Home/Home.vue'
import Forms from './pages/Forms/Forms.vue'
import Documentacion from './pages/Documentacion/Documentacion.vue'
import Panels from './pages/Panels/Panels.vue'
import Button from './pages/Button/Button.vue'
import Alerts from './pages/Alerts/Alerts.vue'
import Grid from './pages/Grid/Grid.vue'
import GettingStarted from './pages/GettingStarted/GettingStarted.vue'
import Icons from './pages/Icons/Icons.vue'
import Images from './pages/Images/Images.vue'
import Type from './pages/Type/Type.vue'
import Navbar from './pages/Navbar/Navbar.vue'
import Tablas from './pages/Tablas/Tablas.vue'
import Tabs from './pages/Tabs/Tabs.vue'
import Menu from './pages/Menu/Menu.vue'
import Overview from './pages/Overview/Overview.vue'
import Breadcrumbs from './pages/Breadcrumbs/Breadcrumbs.vue'

const routes = [
  { path: '/', name: 'Welcome', component: Welcome },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: '/documentacion', name: 'Documentacion', component: Documentacion },
      { path: '/forms', name: 'Forms', component: Forms },
      { path: '/overview', name: 'Overview', component: Overview },
      { path: '/panels', name: 'Panels', component: Panels },
      { path: '/button', name: 'Button', component: Button },
      { path: '/alerts', name: 'Alerts', component: Alerts },
      { path: '/grid', name: 'Grid', component: Grid },
      { path: '/getting-started', name: 'GettingStarted', component: GettingStarted },
      { path: '/icons', name: 'Icons', component: Icons },
      { path: '/images', name: 'Images', component: Images },
      { path: '/type', name: 'Type', component: Type },
      { path: '/navbar', name: 'Navbar', component: Navbar },
      { path: '/menu', name: 'Menu', component: Menu },
      { path: '/tablas', name: 'Tablas', component: Tablas },
      { path: '/tabs', name: 'Tabs', component: Tabs },
      { path: '/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "activeMenu"
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
