 <template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-header">
              <span>[Componente]</span>
              <h2>Botones</h2>
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
              <h3>Regular primary</h3>
              <p>El botón con la clase <span class="span-code">.btn-primary</span>, esta definido como llamada a la acción (call to action) en donde se aplique.</p>
            </div>
            <div class="content-example">
              <button type="button" class="btn btn-regular btn-regular-radius btn-primary">Primary</button>

              <!-- Option  -->
              <button type="button" class="btn btn-regular btn-regular-radius btn-primary">Option 2</button>

              <!-- /// -->

              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-primary"</span><span class="nt">&gt;</span><span class="nt">Primary</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Regular primary outline</h3>
              <p><span class="span-code">.btn-outline-primary</span> Puede definirse como Call to action, dependiendo del proyecto.</p>
            </div>
            <div class="content-example">
              <button type="button" class="btn btn-regular btn-regular-radius btn-outline-primary">Primary</button>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-outline-primary"</span><span class="nt">&gt;</span><span class="nt">Primary</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Regular base</h3>
              <p>El botón con la clase <span class="span-code">.btn-standard</span> se puede utilizar en proyecto donde no tenga una mayor importancia del punto de vista usabilidad. Ejemplo: <span class="span-code">Volver</span> </p>
            </div>
            <div class="content-example">
              <button type="button" class="btn btn-regular btn-regular-radius btn-standard">Defecto</button>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-standard"</span><span class="nt">&gt;</span><span class="nt">Defecto</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Colores</h3>
              <p>Use cualquiera de las clases de botones disponibles para crear rápidamente un botón con estilo.</p>
            </div>
            <div class="content-example">
              <button type="button" class="btn btn-regular btn-regular-radius btn-standard">Standard</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-primary">Primary</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-secondary">Secondary</button>
              <!--<button type="button" class="btn btn-regular btn-regular-radius btn-third">Third</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-fourth">Fourth</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-fifth">Fifth</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-link">Link</button>-->
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-standard"</span><span class="nt">&gt;</span><span class="nt">Standard</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-primary"</span><span class="nt">&gt;</span><span class="nt">Primary</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-secondary"</span><span class="nt">&gt;</span><span class="nt">Secondary</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <!--<span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-third"</span><span class="nt">&gt;</span><span class="nt">Third</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-fourth</span><span class="nt">&gt;</span><span class="nt">Fourth</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-fifth"</span><span class="nt">&gt;</span><span class="nt">Fifth</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-link"</span><span class="nt">&gt;</span><span class="nt">Link</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>-->
                  </code>
                </pre>
              </figure>
            </div>
          </div>
          <div class="content-container">
            <div class="header-top">
              <h3>Botones outline</h3>
              <p>Use cualquiera de las clases de botones outline disponibles para crear rápidamente un botón con estilo.</p>
            </div>
            <div class="content-example">
              <button type="button" class="btn btn-regular btn-regular-radius btn-standard">Standard</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-outline-secondary">Secondary</button>
              <!--<button type="button" class="btn btn-regular btn-regular-radius btn-outline-third">Third</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-outline-fourth">Fourth</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-outline-fifth">Fifth</button>
              <button type="button" class="btn btn-regular btn-regular-radius btn-link">Link</button>-->
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-standard"</span><span class="nt">&gt;</span><span class="nt">Standard</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-outline-primary"</span><span class="nt">&gt;</span><span class="nt">Primary</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-outline-secondary"</span><span class="nt">&gt;</span><span class="nt">Secondary</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <!--<span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-outline-third"</span><span class="nt">&gt;</span><span class="nt">Third</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-outline-fourth</span><span class="nt">&gt;</span><span class="nt">Fourth</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-outline-fifth"</span><span class="nt">&gt;</span><span class="nt">Fifth</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="nt">type=</span><span class="s">"button"</span> <span class="nt">class=</span><span class="s">"btn btn-regular btn-regular-radius btn-link"</span><span class="nt">&gt;</span><span class="nt">Link</span><span class="nt">&lt;</span><span class="nt">/button</span><span class="nt">></span>-->
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

<script lang="ts" src="../Button/Button.vue.ts"></script>

<style lang="scss" module>
  @import '../Button/Button.scss';
</style>
