<template>
  <div class="row">
    <div class="col-md-12">
      <header class="text-header-card">
        <h3>Formulario</h3>
      </header>
      <div class="panel panel-default">
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo electronico</label>
              <input type="email" class="form-control input-sm">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control input-sm">
            </div>
            <button type="submit" class="btn btn-sm btn-primary">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Documentacion/Documentacion.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Documentacion/Documentacion.scss';
</style>
