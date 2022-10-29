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
            Piononos
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
          GRANADA
        </h3>
      </div>
      <div class="uk-padding uk-text-left uk-container">
        <h2 class="uk-text-primary uk-text-italic">
          Ingredients
        </h2>
        <p><b>For 4 people</b></p>
        <ul>
          <li>
            1 dozen eggs</li>
          <li>250 grammes of sugar syrup</li>
          <li>300 grammes of wheat flour (sieved)</li>
          <li>500 grammes of sugar</li>
          <li>Cinnamon</li>
          <li>Cornflour
          </li>
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
        <p>
          Beat the 10 egg whites until they are stiff and add the syrup, the flour and the
          cinnamon. Make a fine paste from this mixture, then spread this onto greaseproof paper
          on an oven tray. Heat the oven to a low temperature and cook it for 20 minutes.
        </p>
        <p> Add cinnamon to the cornflour and make a confectioner’s cream with it, then cover the
          sponge which has been in the oven.
        </p>
        <p>After spreading the cream, roll up the sponge and cut it into lengths of around 3 cm. Put
          a little yolk custard and sugar on top and apply a hot iron to burn them.
        </p>
        <p>Make the egg yolk custard with a litre of water, half a kilo of sugar and a stick of
          cinnamon. Add the sugar and cinnamon to the water and heat it to boiling, making a
          syrup. When it is made, remove the cinnamon and add the beaten egg yolks. Heat the
          mixture over low heat and stir with a wooden spoon before removing it, always before it
          boils.
        </p>
        <hr>
      </div>
      <a
        target="_blank"
        href="https://www.andalucia.org/en/eno-gastronomy/scents-and-flavours-of-andalusia"
        class="uk-button uk-button-default"
      >SCENTS AND FLAVOURS OF ANDALUSIA </a>
      <div class="uk-margin-large uk-position-relative uk-container">
        <router-link
          to="pan-de-cadiz"
          class="uk-margin-right uk-align-left"
          uk-tooltip="title:Previous"
          @click.native="scrollToTop"
        >
          <span uk-icon="icon: arrow-left" />
        </router-link>
        <router-link
          to="polea"
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
