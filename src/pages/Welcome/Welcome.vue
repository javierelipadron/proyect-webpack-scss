<template>
  <div>
    <div class="bg-general">
      <div class="logoFooter">
        <img width="100%" src="dist/images/cuprum_white.png" alt="">
      </div>
      <div class="content-home">
        <h1><span>Orbit</span> Design System</h1>
        <p>Repositorio de diseño e implementación de componentes digitales Cuprum</p>
        <router-link to="/overview">
          <button class="btn btn-large btn-regular-radius btn-blanco">[Documentación]</button>
        </router-link>
      </div>
      <div class="logoCover">
        <img width="100%" src="dist/images/logoCover.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Welcome/Welcome.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Welcome/Welcome.scss';
</style>
