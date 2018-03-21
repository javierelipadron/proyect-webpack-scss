<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Componente]</span>
              <h2>Tabs</h2>
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
              <h3>Multi Tabs</h3>
              <p>Los tabs permiten agregar información en diferentes niveles, permiten una interacción entre hojas de contenido diferenciado. Se permite un máximo de 4 tabs consecutivos.</p>
            </div>
            <div class="content-example">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a href="#ejemplo1" aria-controls="ejemplo1" role="tab" data-toggle="tab">Ejemplo #1</a>
                </li>
                <li role="presentation">
                  <a href="#ejemplo2" aria-controls="ejemplo2" role="tab" data-toggle="tab">Ejemplo #2</a>
                </li>
              </ul>
              <div class="tab-content" style="padding: 1rem;">
                <div role="tabpanel" class="tab-pane active" id="ejemplo1">
                  <h5>El contenido para la primera pestaña va aquí.</h5>
                </div>
                <div role="tabpanel" class="tab-pane" id="ejemplo2">
                  <h5>El contenido para la segunda pestaña va aquí.</h5>
                </div>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html">
    <span class="nt">&lt;ul</span> <span class="nt">class=</span><span class="s">"nav nav-tabs"</span> <span class="nt">role=</span><span class="s">"tablist"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;li</span> <span class="nt">role=</span><span class="s">"presentation"</span> <span class="nt">class=</span><span class="s">"active"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="nt">href=</span><span class="s">"#ejemplo1"</span> <span class="nt">aria-controls=</span><span class="s">"ejemplo1"</span> <span class="nt">role=</span><span class="s">"tab"</span> <span class="nt">data-toggle=</span><span class="s">"tab"</span><span class="nt">&gt;</span>Ejemplo #1<span class="nt">&lt;/a</span><span class="nt">&gt;</span>
      <span class="nt">&lt;/li</span><span class="nt">&gt;</span>
      <span class="nt">&lt;li</span> <span class="nt">role=</span><span class="s">"presentation"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="nt">href=</span><span class="s">"#ejemplo2"</span> <span class="nt">aria-controls=</span><span class="s">"ejemplo2"</span> <span class="nt">role=</span><span class="s">"tab"</span> <span class="nt">data-toggle=</span><span class="s">"tab"</span><span class="nt">&gt;</span>Ejemplo #2<span class="nt">&lt;/a</span><span class="nt">&gt;</span>
      <span class="nt">&lt;/li</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/ul</span><span class="nt">&gt;</span>

    <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"tab-content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="nt">role=</span><span class="s">"tabpanel"</span> <span class="nt">class=</span><span class="s">"tab-pane active"</span> <span class="nt">id=</span><span class="s">"#ejemplo1"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;h5</span><span class="nt">&gt;</span>El contenido para la primera pestaña va aquí.<span class="nt">&lt;/h5</span><span class="nt">&gt;</span>
      <span class="nt">&lt;/div</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="nt">role=</span><span class="s">"tabpanel"</span> <span class="nt">class=</span><span class="s">"tab-pane"</span> <span class="nt">id=</span><span class="s">"#ejemplo2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;h5</span><span class="nt">&gt;</span>El contenido para la segunda pestaña va aquí.<span class="nt">&lt;/h5</span><span class="nt">&gt;</span>
      <span class="nt">&lt;/div</span><span class="nt">&gt;</span>
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

<script lang="ts" src="../Tabs/Tabs.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Tabs/Tabs.scss';
</style>
