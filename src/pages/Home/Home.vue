<template>
  <div>
    <div class="container-full">
      <div class="content-wrap">
        <div class="nav-lateral">
          <div class="logo-radius">
            <a href="/design-systems/index.html">
              <img src="dist/images/logo.svg" width="100%" alt="">
            </a>
          </div>
          <ul class="menu-lists">
            <!--
            <li>
              <a href="#/button">Botones</a>
            </li>
            <li>
              <a href="#/alerts">Alertas</a>
            </li>
            <li>
              <a href="#/forms">Formulario</a>
            </li>
            <li>
              <a href="#/type">Tipografías</a>
            </li>
            <li>
              <a href="#/tabs">Tabs</a>
            </li>
            <li>
              <a href="#/tablas">Tablas</a>
            </li>
            <li>
              <a href="#/getting-started">Empezando</a>
            </li>
            <li>
              <a href="#/menu">Menú</a>
            </li><li>
              <a href="#/grid">Grillas</a>
            </li>
            <li>
              <a href="#/breadcrumbs">Breadcrumbs</a>
            </li>
            <li>
              <a href="#/icons">Iconos</a>
            </li>
            <li>
              <a href="#/navbar">Navegación</a>
            </li>
            <li>
              <a href="#/images">Imágenes</a>
            </li>
            <li>
              <a href="#/panels">Paneles</a>
            </li>
            -->
            <router-link tag="li" to="/overview">Empezando</router-link>
            <router-link tag="li" to="/forms">Formulario</router-link>
            <router-link tag="li" to="/button">Botones</router-link>
            <router-link tag="li" to="/tablas">Tablas</router-link>
            <router-link tag="li" to="/alerts">Alertas</router-link>
            <router-link tag="li" to="/type">Tipografías</router-link>
            <router-link tag="li" to="/tabs">Tabs</router-link>
          </ul>
          <div class="logoFooterNav">
            <img width="100%" src="dist/images/logo_blue.png" alt="">
          </div>
        </div>
        <div class="nav-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Home/Home.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Home/Home.scss';
</style>
