<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Componente]</span>
              <h2>Tablas</h2>
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
              <h3>Tabla standard</h3>
              <p>Para crear una estructura de tabla base se debe usar la clase <span class="span-code">.table</span>. Si queremos personalizar más podemos agregar la clase <span class="span-code">.table-bordered</span>, asi agregaremos bordes y divisiones.</p>
            </div>
            <div class="content-example">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive tab-table-data">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>RUT</th>
                          <th style="text-align: center;">Name</th>
                          <th style="text-align: center;">Apellido</th>
                          <th style="text-align: center;">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in persons">
                          <td>{{i.rut}}</td>
                          <td style="text-align: center;">{{i.name}}</td>
                          <td style="text-align: center;">{{i.lastname}}</td>
                          <td style="text-align: right;">{{i.email}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <figure class="highlight">
                      <pre>
                        <code class="language-html" data-lang="html">
        <span class="nt">&lt;table</span> <span class="nt">class=</span><span class="s">"table table-bordered"</span><span class="nt">&gt;</span><span class="nt"></span>
          <span class="nt">&lt;thead</span><span class="nt">&gt;</span><span class="nt"></span>
            <span class="nt">&lt;tr</span><span class="nt">&gt;</span><span class="nt"></span>
              <span class="nt">&lt;th</span><span class="nt">&gt;</span><span class="nt"></span>Nombre<span class="nt">&lt;/th</span><span class="nt">&gt;</span><span class="nt"></span>
              <span class="nt">&lt;th</span><span class="nt">&gt;</span><span class="nt"></span>Apellido<span class="nt">&lt;/th</span><span class="nt">&gt;</span><span class="nt"></span>
            <span class="nt">&lt;/tr</span><span class="nt">&gt;</span><span class="nt"></span>
          <span class="nt">&lt;/thead</span><span class="nt">&gt;</span><span class="nt"></span>
          <span class="nt">&lt;tbody</span><span class="nt">&gt;</span><span class="nt"></span>
            <span class="nt">&lt;tr</span><span class="nt">&gt;</span><span class="nt"></span>
              <span class="nt">&lt;td</span><span class="nt">&gt;</span><span class="nt"></span>Alejandra<span class="nt">&lt;/td</span><span class="nt">&gt;</span><span class="nt"></span>
              <span class="nt">&lt;td</span><span class="nt">&gt;</span><span class="nt"></span>Carrasco<span class="nt">&lt;/td</span><span class="nt">&gt;</span><span class="nt"></span>
            <span class="nt">&lt;/tr</span><span class="nt">&gt;</span><span class="nt"></span>
          <span class="nt">&lt;/tbody</span><span class="nt">&gt;</span><span class="nt"></span>
        <span class="nt">&lt;</span><span class="nt">/table</span><span class="nt">></span>
                        </code>
                      </pre>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Tablas/Tablas.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Tablas/Tablas.scss';
</style>
