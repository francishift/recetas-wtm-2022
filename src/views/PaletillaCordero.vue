<!-- eslint-disable max-len -->
<template>
  <div>
    <div class=" uk-margin-large-bottom">
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
            Lamb shoulder
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
          JAÉN
        </h3>
      </div>
      <div class="uk-padding uk-text-left uk-container">
        <h2 class="uk-text-primary uk-text-italic">
          Ingredients
        </h2>
        <ul>
          <li>1/2 shoulder of segureño lamb</li>
          <li>Garlic</li>
          <li>Peppercorns, laurel and thyme</li>
          <li>Extra Virgin Olive Oil from the Sierra de Cazorla</li>
        </ul>
        <p><b>For the garnish:</b></p>
        <ul>
          <li>Potatoes</li>
          <li>Red pepper</li>
          <li>Green pepper</li>
          <li>Onion</li>
          <li>Courgette </li>
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
          Use the mortar and pestle to make a paste of the garlic, peppercorns, laurel, thyme, wine and
          olive oil. First add the garlic, peppercorns, laurel and thyme and crush them well, then add the
          wine and oil to make an emulsion.
        </p>
        <p>Then spread this emulsion over the shoulders, which are placed in an oven tray.</p><p>
          Put them in the oven at medium heat (180ºC) for two hours - until the meat comes off the bone.
          For the first hour, place the shoulders with the inner side face down, then turn them over for the
          second hour so that they are browned on the outside.
        </p>
        <p><b>Recommendations</b></p>
        <p>
          The tray should never become completely dry, if it does, add a little water to the bottom of the
          tray.
        </p><p>For the garnish, put some potatoes in the oven for the second hour of roasting.</p>
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
          class="uk-margin-right uk-align-left"
          uk-tooltip="title:Previous"
          @click.native="scrollToTop"
        >
          <span uk-icon="icon: arrow-left" />
        </router-link>
        <router-link
          to="pan-de-cadiz"
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
