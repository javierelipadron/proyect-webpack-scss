<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Componente]</span>
              <h2>Formulario</h2>
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
              <h3>Input texto</h3>
              <p>Los input de texto básico deben estar contenidos dentro de un <span class="span-code">.form-group</span> que agrupa a todos los elementos de un formulario.</p>
            </div>
            <div class="content-example">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span><span class="nt">&gt;</span>Nombre<span class="nt">&lt;/label</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="nt">type=</span><span class="s">"text"</span> <span class="nt">class=</span><span class="s">"form-control"</span><span class="nt">></span>
    <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <!-- Input Telefono o Celular -->
          <div class="content-container">
            <div class="header-top">
              <h3>Input número de contacto</h3>
              <p>Los campos de formulario de tipo texto se pueden modificar para que muestren un texto, un botón o un ícono delante, detrás o a ambos lados. Para ello, se agrupa el campo dentro de un elemento con la clase <span class="span-code">.input-group</span>.</p>
            </div>
            <div class="content-example">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label>Nº de contacto</label>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon">+56</div>
                        <input type="text" class="form-control" v-model="celular"
                        @change="formatCelular" minlength="1" maxlength="9" v-on:keypress="isPhone(event)">
                      </div>
                      <span v-if="!phone" class="help-block">Este campo es obligatorio.</span>
                    </div>
                  </div>
                </div>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span><span class="nt">&gt;</span>Nº de contacto<span class="nt">&lt;/label</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"input-group"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"input-group-addon"</span><span class="nt">&gt;</span>+56<span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
        <span class="nt">&lt;input</span> <span class="nt">type=</span><span class="s">"text"</span> <span class="nt">class=</span><span class="s">"form-control"</span> <span class="nt">minlength=</span><span class="s">"1"</span> <span class="nt">maxlength=</span><span class="s">"9"</span><span class="nt">></span>
      <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
    <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <!-- Select -->
          <div class="content-container">
            <div class="header-top">
              <h3>Selector</h3>
              <p>Para implementar un selector de opciones debe anidar la clase <span class="span-code">.select-style</span>.
              </p>
            </div>
            <div class="content-example">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label>¿Que edad tienes?</label>
                    <div class="select-style">
                      <select class="form-control" v-model="optionRegimen">
                        <option disabled value="">Elige una opción</option>
                        <option v-for="i in itemsAge" v-bind:value="i.value">{{ i.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span><span class="nt">&gt;</span>¿Que edad tienes?<span class="nt">&lt;/label</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"select-style"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;select</span> <span class="nt">class=</span><span class="s">"form-control"</span><span class="nt">></span>
          <span class="nt">&lt;option</span> <span class="nt">disabled value=""</span><span class="nt">></span>Elige una opción<span class="nt">&lt;</span><span class="nt">/option</span><span class="nt">></span>
        <span class="nt">&lt;</span><span class="nt">/select</span><span class="nt">></span>
      <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
    <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <!-- Select + buscador -->
          <div class="content-container">
            <div class="header-top">
              <h3>Input desplegable</h3>
              <p>Input desplegable es un campo de texto con lista de elementos y búsqueda. Debe usarse con data json.</p>
            </div>
            <div class="content-example">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group lists-countries">
                    <label>Selecciona tu país</label>
                    <input type="text" class="form-control" placeholder="Chile" v-model="selectCountry" @click="filterCountriesSelect">
                    <ul class="countries-orders" v-if="viewCountries">
                      <li v-for="c in filterListCountries()"
                        @click="selectEspecific(c.name)">
                        {{ c.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span><span class="nt">&gt;</span>Selecciona tu país<span class="nt">&lt;/label</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="nt">type=</span><span class="s">"text"</span> <span class="nt">class=</span><span class="s">"form-control"</span> <span class="nt">placeholder=</span><span class="s">"Chile"</span><span class="nt">></span>
      <span class="nt">&lt;ul</span> <span class="nt">class=</span><span class="s">"countries-orders"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;li</span> <span class="nt">class=</span><span class="s">"countries-orders"</span><span class="nt">&gt;</span>
          Paises json...
        <span class="nt">&lt;</span><span class="nt">/li</span><span class="nt">></span>
      <span class="nt">&lt;</span><span class="nt">/ul</span><span class="nt">></span>
    <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Input texto con validación</h3>
              <p>Este input puede ser de tipo <span class="span-code">text, number, email, password</span>. Nos permite alertar al usuario que tiene un componente vacio antes de completar un flujo.</p>
            </div>
            <div class="content-example">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-bind:class="name ? 'has-error' : 'has-error'" v-model="name">
                    <small v-bind:class="name ? 'small-error' : 'small-error'">Ingresa tu nombre</small>
                  </div>
                </div>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span><span class="nt">&gt;</span>Nombre<span class="nt">&lt;/label</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="nt">type=</span><span class="s">"text"</span> <span class="nt">class=</span><span class="s">"form-control"</span><span class="nt">></span>
      <span class="nt">&lt;small</span><span class="nt">&gt;</span>Ingresa tu nombre<span class="nt">&lt;</span><span class="nt">/small</span><span class="nt">></span>
    <span class="nt">&lt;</span><span class="nt">/div</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Forms/Forms.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Forms/Forms.scss';
</style>
