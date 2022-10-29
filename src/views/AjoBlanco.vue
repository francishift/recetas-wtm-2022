<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="uk-margin-large-bottom">
      <router-link
        to="/"
      >
        <img
          uk-img="loading: eager"
          src="../assets/cabecera.jpg"
          alt="Crear tu receta"
          class="uk-text-center cabecera"
        >
      </router-link>
      <div
        class="uk-padding uk-container uk-position-relative uk-flex-middle uk-margin-auto uk-animation-slide-top-small"
        uk-grid
      >
        <div class="uk-width-5-6@s">
          <h1 class="uk-text-primary uk-margin-remove uk-display-inline">
            Ajo blanco
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
          MÁLAGA
        </h3>
      </div>
      <div class="uk-padding uk-text-left uk-container">
        <h2 class="uk-text-primary uk-text-italic">
          Ingredients
        </h2>
        <p>
          <b>For 6 people</b>
          <ul>
            <li>
              500 grammes of bread without crusts
            </li><li>
              100 grammes of raw almonds
            </li><li>
              3 garlic cloves
            </li><li>
              1 kilo of Malaga grapes
            </li><li>
              Half a glass of wine vinegar
            </li><li>
              One glass of olive oil with salt
            </li>
          </ul>
        </p>
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
        <p>
          Soak the bread in water and then drain it. Peel the almonds.
        </p><p>
          Put these ingredients with the garlic in the mortar and crush them to a fine paste. Then add the
        </p><p>
          oil little by little, as though you were making mayonnaise. You will obtain a paste that you can
        </p><p>
          thin out with water and vinegar until it becomes a creamy broth.
        </p><p>
          Peel the grapes and remove the pips. Add them to the broth and season to taste.
        </p>
        Ajoblanco is always served chilled.
        <hr>
      </div>
      <a
        target="_blank"
        href="https://www.andalucia.org/en/eno-gastronomy/scents-and-flavours-of-andalusia"
        class="uk-button uk-button-default"
      >SCENTS AND FLAVOURS OF ANDALUSIA </a>
      <div class="uk-margin-large uk-position-relative uk-container">
        <router-link
          to="leche-frita"
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
