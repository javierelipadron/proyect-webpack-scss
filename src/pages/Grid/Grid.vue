<template>
  <div>
    <!-- Header -->
    <div class="wrapper-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Grillas</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 id="grid-example-basic"><a class="anchorjs-link " href="#grid-example-basic" aria-label="Anchor link for: grid example basic" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Example: Stacked-to-horizontal</h2>
          <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any <code>.row</code>.</p>
          <div class="row show-grid"> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> <div class="col-md-1">.col-md-1</div> </div>
          <div class="row show-grid"> <div class="col-md-8">.col-md-8</div> <div class="col-md-4">.col-md-4</div> </div>
          <div class="row show-grid"> <div class="col-md-4">.col-md-4</div> <div class="col-md-4">.col-md-4</div> <div class="col-md-4">.col-md-4</div> </div>
          <div class="row show-grid"> <div class="col-md-6">.col-md-6</div> <div class="col-md-6">.col-md-6</div> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../Grid/Grid.vue.ts"></script>

<style lang="scss" scoped>
  @import '../Grid/Grid.scss';
</style>
