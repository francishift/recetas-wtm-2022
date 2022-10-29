<template>
  <div>
    <router-link
      to="/"
    >
      <!--eslint-disable-next-line vuejs-accessibility/click-events-have-key-events-->
      <img
        uk-img="loading: eager"
        src="../assets/cabecera.jpg"
        alt="Crea tu receta"
        class="uk-text-center cabecera"
        @click="reiniciar"
      >
    </router-link>
    <RecetasComponent />
  </div>
</template>

<script>
import RecetasComponent from '@/components/RecetasComponent.vue';

export default {
  name: 'ReCetas',
  components: {
    RecetasComponent,
  },
  methods: {
    reiniciar() {
      window.location.reload();
    },
  },
};
</script>
