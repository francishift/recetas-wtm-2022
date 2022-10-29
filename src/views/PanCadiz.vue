<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multiline-html-element-content-newline -->
<template>
  <div>
    <div class="uk-margin-large-bottom">
      <router-link
        to="/"
      >
        <img
          uk-img="loading: eager"
          src="../assets/cabecera.jpg"
          alt="Crea tu receta"
          class="uk-text-center cabecera"
        >
      </router-link>
      <div
        class="uk-padding uk-container uk-position-relative uk-flex-middle uk-margin-auto uk-animation-slide-top-small"
        uk-grid
      >
        <div class="uk-width-5-6@s">
          <h1 class="uk-text-primary uk-margin-remove uk-display-inline">
            Pan de Cádiz
          </h1>
        </div>
        <div class="uk-width-1-6@s">
          <router-link
            to="/"
            class="uk-margin-right"
            uk-tooltip="title:Another recipe"
          >
            <span uk-icon="icon: home" />
          </router-link>
          <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
          <a
            class="uk-icon"
            uk-tooltip="title: Print"
            onclick="window.print()"
            title=""
            aria-expanded="false"
            tabindex="0"
          ><span uk-icon="icon: print" /></a>
        </div>
      </div>
      <div class="uk-card uk-card-primary uk-padding">
        You can taste this recipe in
        <h3 class="uk-light">
          Cádiz
        </h3>
      </div>
      <div class="uk-padding uk-text-left uk-container">
        <h2 class="uk-text-primary uk-text-italic">
          Ingredients
        </h2>
        <p>For the marzipan (370 grammes):</p>
        <ul>
          <li>175 grammes of almond flour (finely ground almonds, with the consistency of flour. You<br>
            can make this yourself at home mixing them with sugar in a blender that has the<br>
            function for this texture)<br>
          </li>
          <li>175 grammes of sugar</li>
          <li>30 grammes of egg whites</li>
        </ul>
      </div>
      <div class="uk-card uk-card-primary uk-padding">
        <div class="uk-container uk-position-relative">
          <img
            uk-img="loading: eager"
            src="../assets/cubiertos.png"
            alt="Crea tu receta"
            class="uk-animation-fade uk-position-absolute uk-position-right cubiertos"
          >
        </div>
      </div>
      <div class="uk-padding uk-text-left uk-container">
        <h2 class="uk-text-primary uk-text-italic">
          Preparation
        </h2>
        <ul>
          <li>35 grammes of cabello de ángel (made from cooking a black-seed squash with sugar).<br>
            This can be bought as a preserve.<br>
          </li>
          <li>25 grammes of natural calabazete (this is a product similar to candied fruit. It is made<br>
            from quince, sweet potato and melon, which are dried and then conserved, different<br>
            colours are then applied). It can usually be found in confectioner’s shops<br>
          </li>
          <li>25 grammes of red calabazate<br>
          </li>
          <li>25 grammes of green calabazate<br>
          </li>
          <li>35 grammes of candied yolks<br>
          </li>
          <li>Beaten egg to paint the dessert before it goes into the oven<br>
          </li>
          <li>1 wafer (minimum thickness used by confectioners) The same thickness as used on the<br>
            surface of hard Alicante nougat)</li>
        </ul>
        <hr>
      </div>
      <a
        target="_blank"
        href="https://www.andalucia.org/en/eno-gastronomy/scents-and-flavours-of-andalusia"
        class="uk-button uk-button-default"
      >SCENTS AND FLAVOURS OF ANDALUSIA </a>
      <div class="uk-margin-large uk-position-relative uk-container">
        <router-link
          to="paletilla-de-cordero"
          class="uk-margin-right uk-align-left"
          uk-tooltip="title:Previous"
          @click.native="scrollToTop"
        >
          <span uk-icon="icon: arrow-left" />
        </router-link>
        <router-link
          to="piononos"
          class="uk-margin-right uk-align-right"
          uk-tooltip="title:Next"
          @click.native="scrollToTop"
        >
          <span uk-icon="icon: arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
