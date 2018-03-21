<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Componente]</span>
              <h2>Alertas</h2>
              <div class="icon-esfera-top"></div>
              <div class="icon-esfera-right"></div>
              <div class="icon-esfera-left"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-bootom"></div>
    </div>
    <!-- Content -->
    <div class="container container-wrap">
      <div class="row">
        <div class="col-md-12">
          <div class="content-container">
            <div class="header-top">
              <h3>Disclaimer</h3>
              <p>El uso de disclaimer es limitado y solo debe ser utilizado si es estrictamente necesario. Este componente contiene iconografía y texto. No se puede cerrar.</p>
            </div>
            <div class="content-example">
              <div class="alert alert-icon alert-warning-AF" role="alert">
                <div class="icon-styles">
                  <i class="fa fa-info-circle"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <figure class="highlight">
                <!--<div class="button-copied">
                  <button type="button"
                  class="btn btn-standard"
                  v-on:click="myFunction"
                  data-toggle="tooltip" data-placement="top" title="Copiado!">
                    Copiar
                  </button>
                </div>-->
                <pre>
    <code class="language-html" data-lang="html">
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"alert alert-icon alert-warning-AF"</span> <span class="na">role=</span><span class="s">"alert"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"icon-styles"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-info-circle"</span><span class="nt">&gt;</span><span class="nt">&lt;</span><span class="nt">/i</span><span class="nt">&gt;</span>
      <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">&gt;</span>
      <span class="nt">&lt;p</span><span class="nt">&gt;</span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      <span class="nt">&lt;</span><span class="nt">/p</span><span class="nt">&gt;</span>
    <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">&gt;</span>
    </code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="content-container">
            <div class="header-top">
              <h3>Alerta con icono</h3>
              <p>El uso de alerta es limitado y solo debe ser utilizado si es estrictamente necesario. Este componente contiene iconografía y texto. No se puede cerrar.</p>
            </div>
            <div class="content-example">
              <div class="alert alert-icon alert-warning" role="alert">
                <div class="icon-styles">
                  <i class="fa fa-info-circle"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Alerts/Alerts.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Alerts/Alerts.scss';
</style>
