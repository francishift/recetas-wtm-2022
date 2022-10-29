<!-- eslint-disable max-len -->
<template>
  <div class="">
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
            Fried milk
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
          ALMERÍA
        </h3>
      </div>
      <div class="uk-padding uk-text-left uk-container">
        <h2 class="uk-text-primary uk-text-italic">
          Ingredients
        </h2>
        <p>
          <b>For 4 people</b>
          <ul>
            <li>
              Sugar: 100 grammes for the fried milk and 2 large dessert spoonfuls for<br>
              the coating
            </li>
            <li>Egg: 1 for the batter</li>
            <li>
              Self-raising flour: 40 grammes for the fried milk and a little more for the<br>
              coating
            </li>
            <li>Vanilla essence: half a teaspoon</li>
            <li>Milk: Half a litre</li>
            <li>Lemon peel: the peel of 1/2 a lemon</li>
            <li>Orange peel: the peel of 1/2 an orange</li>
            <li>Stick of cinnamon: 1 stick</li>
            <li>Powdered cinnamon: half a teaspoon to coat the fried milk</li>
            <li>
              Oil: sunflower oil can be used.
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
          1) Put half of the milk in a pan with the cinnamon stick and the lemon and
          orange peel.
          Keep the rest of the milk in the fridge. Warm it over medium heat and allow it to
          warm up until it is nearly at boiling point. Remove the pan from the heat and
          turn off the flame. Away from the heat, cover the pan and allow the milk to
          infuse with the cinnamon, orange and lemon for 25 minutes.
        </p>
        <p>
          2) After 25 minutes remove the cinnamon stick, the orange and lemon peel.
          Pass the mixture through a sieve into another pan, add the sugar, heat it over
          low to medium heat and stir well.
          Take the rest of the milk out and stir the flour into it. When it is blended, pour it
          into the pan with the warm milk.
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
          to="ajoblanco"
          class="uk-margin-right uk-align-left"
          uk-tooltip="title:Previous"
          @click.native="scrollToTop"
        >
          <span uk-icon="icon: arrow-left" />
        </router-link>
        <router-link
          to="paletilla-de-cordero"
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
