<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Componente]</span>
              <h2>Tipografías</h2>
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
              <h3>Vinculación a Google Fonts</h3>
              <p>Lee las instrucciones cuidadosamente de como aplicar una fuente personalizada a tu proyecto.</p>
            </div>
            <div class="content-example">
              <h5>Añadir URL en la raíz del proyecto</h5>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;link</span> <span class="nt">rel=</span><span class="s">"stylesheet"</span> <span class="nt">href=</span><span class="s">"https://fonts.googleapis.com/css?family=Rubik:300,300i,400,500,700"</span><span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
              <h5>Importar en el CSS</h5>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="s">@import url('https://fonts.googleapis.com/css?family=Rubik:300,300i,400,500,700');</span>
                  </code>
                </pre>
              </figure>
              <h5>Declaración en el CSS</h5>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="s">font-family: 'Rubik', sans-serif;</span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="content-container">
            <div class="header-top">
              <h3>Fuentes utilizadas</h3>
              <p>Estas fuentes están definidas para ser aplicadas en cualquier proyecto.</p>
            </div>
            <div class="content-example">
              <table class="table">
                <tbody>
                  <!--<tr>
                    <td>
                      <h1>h1. Encabezado Cuprum</h1>
                    </td>
                    <td class="type-info">
                      Semibold 36px
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>h2. Encabezado Cuprum</h2>
                    </td>
                    <td class="type-info">Semibold 30px</td>
                  </tr>-->
                  <tr>
                    <td>
                      <h3>h3. Encabezado Cuprum</h3>
                    </td>
                    <td class="type-info">Semibold 24px</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>h4. Encabezado Cuprum</h4>
                    </td>
                    <td class="type-info">Semibold 18px</td>
                  </tr>
                  <!--<tr>
                    <td>
                      <h5>h5. Encabezado Cuprum</h5>
                    </td>
                    <td class="type-info">Semibold 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>h6. Encabezado Cuprum</h6>
                    </td>
                    <td class="type-info">Semibold 12px</td>
                  </tr>-->
                </tbody>
              </table>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;h3</span><span class="nt">&gt;</span>Encabezado Cuprum<span class="nt">&lt;/h3</span><span class="nt">&gt;</span>
    <span class="nt">&lt;h4</span><span class="nt">&gt;</span>Encabezado Cuprum<span class="nt">&lt;/h4</span><span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="content-container">
            <div class="header-top">
              <h3>Párrafo aplicado en los widget</h3>
              <p>Texto estándar aplicable en descripciones genericas.</p>
            </div>
            <div class="content-example">
              <h5>Ejemplo párrafo</h5>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;p</span><span class="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.<span class="nt">&lt;/p</span><span class="nt">&gt;</span>
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

<script lang="ts" src="../Type/Type.vue.ts"></script>

<style lang="scss" scoped module>
  @import '../Type/Type.scss';
</style>
