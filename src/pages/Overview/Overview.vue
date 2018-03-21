<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Configuración]</span>
              <h2>Antes de comenzar</h2>
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
              <h3>Doctype HTML5</h3>
              <p>Hace uso de ciertos elementos HTML y propiedades CSS que requieren el uso del doctype HTML5. Inclúyalo al comienzo de todos sus proyectos.</p>
            </div>
            <div class="content-example">
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="cp">&lt;!DOCTYPE html&gt;</span>
    <span class="nt">&lt;html</span> <span class="nt">lang=</span><span class="s">"es_CL"</span><span class="nt">&gt;</span>
      ...
    <span class="nt">&lt;/html</span><span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Adaptación mobile</h3>
              <p>Para garantizar una reproducción adecuada y un zoom táctil, agregue la metaetiqueta de la ventana gráfica a su <span class="span-code">&lt;head&gt;</span>  </p>
            </div>
            <div class="content-example">
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;meta</span> <span class="nt">name=</span><span class="s">"viewport"</span> <span class="nt">content=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
            <div class="content-example">
              <p>Puede deshabilitar las funciones de ampliación en dispositivos móviles al agregar <span class="span-code">user-scalable=no</span> la metaetiqueta de la ventana gráfica. Esto desactiva el zoom, lo que significa que los usuarios solo pueden desplazarse, y hace que su sitio se sienta un poco más como una aplicación nativa. En general, no recomendamos esto en todos los sitios, ¡así que tenga cuidado!</p>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;meta</span> <span class="nt">name=</span><span class="s">"viewport"</span> <span class="nt">content=</span><span class="s">"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"</span><span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Contenedores</h3>
              <p>Orbit Design System requiere un elemento contenedor para envolver los contenidos del sitio y albergar el sistema de grillas. Puede elegir uno de los dos contenedores para usar en sus proyectos.</p>
            </div>
            <div class="content-example">
              <p>Úse <span class="span-code">.container</span> para un contenedor receptivo de ancho fijo.</p>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
      ...
    <span class="nt">&lt;/div</span><span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
            <div class="content-example">
              <p>Se utiliza <span class="span-code">.container-fluid</span> para un contenedor de ancho completo, que abarca todo el ancho de su ventana gráfica.</p>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"container-fluid"</span><span class="nt">&gt;</span>
      ...
    <span class="nt">&lt;/div</span><span class="nt">&gt;</span>
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

<script lang="ts" src="../Overview/Overview.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Overview/Overview.scss';
</style>
