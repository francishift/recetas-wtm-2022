<!-- eslint-disable max-len -->
<template>
  <div class="recetas uk-container">
    <div class="uk-width-large uk-align-center uk-padding">
      <p v-if="mensaje">
        {{ msg }}
      </p>

      <div
        class="uk-flex uk-flex-center uk-child-width-1-2"
        uk-grid
      >
        <div v-if="MuestraDulceSalado">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Sweet
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/dulce.png"
              alt="Dulce"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="dulce"
            >
          </transition>
        </div>
        <div v-if="MuestraDulceSalado">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Savoury
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/salado.png"
              alt="Salado"
              class="
              uk-card
              uk-card-default
              uk-display-block
              uk-margin-auto
            "
              aria-hidden="true"
              rel="preload"
              @click="salado"
            >
          </transition>
        </div>
        <div v-if="LacteosHuevos">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Dairy
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/lacteos.png"
              alt="Lacteos"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="lacteos"
            >
          </transition>
        </div>
        <div v-if="LacteosHuevos">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Egg
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/huevos.png"
              alt="Huevos"
              class="
              uk-animation-fade
              uk-card
              uk-card-default
              uk-display-block
              uk-margin-auto
            "
              aria-hidden="true"
              rel="preload"
              @click="huevos"
            >
          </transition>
        </div>
        <div v-if="NaranjaMiel">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Orange
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/naranja.png"
              alt="Naranja"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="naranja"
            >
          </transition>
        </div>
        <div v-if="NaranjaMiel">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Honey
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/miel.jpg"
              alt="Miel"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="miel"
            >
          </transition>
        </div>
        <div v-if="CanelaAlmendra">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Cinnamon
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/canela.png"
              alt="Canela"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="canela"
            >
          </transition>
        </div>
        <div v-if="CanelaAlmendra">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Almonds
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/almendras.png"
              alt="Almendras"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="almendras"
            >
          </transition>
        </div>
        <div v-if="CarneVerduras">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Vegetables
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/frutasyverduras.png"
              alt="Verduras"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="verduras"
            >
          </transition>
        </div>
        <div v-if="CarneVerduras">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Meat
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/carne.png"
              alt="Carne"
              class="uk-card uk-card-default uk-display-blockuk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="carne"
            >
          </transition>
        </div>
        <div v-if="TomateAlmendras">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Tomato
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/tomate.png"
              alt="Tomates"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="tomates"
            >
          </transition>
        </div>
        <div v-if="TomateAlmendras">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Almonds
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/almendras.png"
              alt="Almendras"
              class="uk-card uk-card-default uk-display-blockuk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="almendrasSaladas"
            >
          </transition>
        </div>
        <div v-if="CerdoOvino">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Pork
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/cerdo.png"
              alt="Cerdo"
              class="uk-card uk-card-default uk-display-block uk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="cerdo"
            >
          </transition>
        </div>
        <div v-if="CerdoOvino">
          <div class="uk-badge uk-margin-small uk-animation-fade">
            Lamb
          </div><br>
          <transition
            appear
            appear-class="uk-animation-fade"
            appear-to-class="uk-animation-fade"
          >
            <img
              uk-img="loading: eager"
              src="../assets/ovino.png"
              alt="Ovino"
              class="uk-card uk-card-default uk-display-blockuk-margin-auto"
              aria-hidden="true"
              rel="preload"
              @click="ovino"
            >
          </transition>
        </div>
      </div>
      <div
        class="uk-flex uk-flex-middle uk-padding-small uk-text-center recipeselect uk-margin-remove uk-grid-collapse"
        uk-grid
      >
        <!--<div class="uk-width-1-3">
          <h4
            v-if="sdulce"
            class="uk-text-italic uk-text-bold uk-text-primary uk-margin-remove-bottom"
          >
            Ingredients:
          </h4>
          <h4
            v-else-if="ssalado"
            class="uk-text-italic uk-text-bold uk-text-primary uk-margin-remove-bottom"
          >
            Ingredients:
          </h4>
        </div>-->
        <div class="uk-width-1-1">
          <div class="uk-flex uk-flex-center">
            <div v-if="sdulce">
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/dulce.png"
                    alt="Dulce"
                    class=" uk-margin-auto singredient uk-margin-remove-bottom"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Sweet
                  </div>
                </div>
              </transition>
            </div>
            <div v-if="ssalado">
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/salado.png"
                    alt="Salado"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Savoury
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="slacteos"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/lacteos.png"
                    alt="Lacteos"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Dairy
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="snaranja"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/naranja.png"
                    alt="Naranja"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Orange
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="smiel"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/miel.jpg"
                    alt="Miel"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Honey
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="shuevos"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/huevos.png"
                    alt="Huevos"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Egg
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="scanela"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/canela.png"
                    alt="Canela"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Cinnamon
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="salmendras"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/almendras.png"
                    alt="Almendras"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Almonds
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="scarne"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/carne.png"
                    alt="Carne"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Meat
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="scerdo"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/cerdo.png"
                    alt="Cerdo"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Pork
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="sovino"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/ovino.png"
                    alt="Ovino"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Lamb
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="sverduras"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/frutasyverduras.png"
                    alt="Verduras"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Vegetables
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="stomates"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/tomate.png"
                    alt="Tomate"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Tomato
                  </div>
                </div>
              </transition>
            </div>
            <div
              v-if="salmendrassaladas"
              class="uk-margin-left"
            >
              <transition
                appear
                appear-class="uk-animation-shake"
                appear-to-class="uk-animation-shake"
              >
                <div>
                  <img
                    uk-img="loading: eager"
                    src="../assets/almendras.png"
                    alt="Almendras"
                    class="uk-margin-auto singredient"
                    aria-hidden="true"
                    rel="preload"
                  >
                  <br>
                  <div class="uk-badge uk-margin-remove uk-animation-fade">
                    Almonds
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="LecheFrita"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/leche-frita"
          >
            Fried milk
          </router-link>
        </div>
      </div>
      <div
        v-if="Polea"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/polea"
          >
            Polea
          </router-link>
        </div>
      </div>
      <div
        v-if="Piononos"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/piononos"
          >
            Piononos
          </router-link>
        </div>
      </div>
      <div
        v-if="PanDeCadiz"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/pan-de-cadiz"
          >
            Pan de Cádiz
          </router-link>
        </div>
      </div>
      <div
        v-if="Salmorejo"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/salmorejo"
          >
            Salmorejo
          </router-link>
        </div>
      </div>
      <div
        v-if="AjoBlanco"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/ajoblanco"
          >
            Ajo Blanco
          </router-link>
        </div>
      </div>
      <div
        v-if="Solomillo"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary ">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/solomillo"
          >
            PORK FILLET WITH ARACENA CHEESE
          </router-link>
        </div>
      </div>
      <div
        v-if="PaletillaCordero"
        class="uk-animation-fade"
      >
        <h3 class="uk-text-primary uk-margin-top">
          See your Recipe
        </h3>
        <div>
          <router-link
            class="uk-button uk-button-primary uk-button-large"
            to="/paletilla-de-cordero"
          >
            Lamb shoulder
          </router-link>
        </div>
      </div>
      <div
        v-if="reset"
        class="uk-margin-top"
      >
        <a
          class="reinicio"
          aria-hidden="true"
          @click="reiniciar"
        ><span
          uk-icon="icon: refresh"
        >reload</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecetasComponent',
  data() {
    return {
      reset: false,
      msg: 'Choose the ingredients and access your recipe...',
      mensaje: true,
      MuestraDulceSalado: true,
      LacteosHuevos: false,
      NaranjaMiel: false,
      CanelaAlmendra: false,
      LecheFrita: false,
      Polea: false,
      Piononos: false,
      PanDeCadiz: false,
      TomateAlmendras: false,
      Salmorejo: false,
      AjoBlanco: false,
      CerdoOvino: false,
      Solomillo: false,
      PaletillaCordero: false,
      CarneVerduras: false,
      sdulce: false,
      ssalado: false,
      slacteos: false,
      snaranja: false,
      smiel: false,
      shuevos: false,
      scanela: false,
      salmendras: false,
      scarne: false,
      salmendrassaladas: false,
      sovino: false,
      scerdo: false,
      stomates: false,
      sverduras: false,
    };
  },
  methods: {
    reiniciar() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    dulce() {
      this.MuestraDulceSalado = false;
      this.LacteosHuevos = true;
      this.reset = true;
      this.sdulce = true;
    },
    lacteos() {
      this.LacteosHuevos = false;
      this.NaranjaMiel = true;
      this.slacteos = true;
    },
    naranja() {
      this.NaranjaMiel = false;
      this.LecheFrita = true;
      this.mensaje = false;
      this.snaranja = true;
    },
    miel() {
      this.NaranjaMiel = false;
      this.Polea = true;
      this.mensaje = false;
      this.smiel = true;
    },
    huevos() {
      this.CanelaAlmendra = true;
      this.LacteosHuevos = false;
      this.shuevos = true;
    },
    canela() {
      this.CanelaAlmendra = false;
      this.Piononos = true;
      this.mensaje = false;
      this.scanela = true;
    },
    almendras() {
      this.CanelaAlmendra = false;
      this.PanDeCadiz = true;
      this.mensaje = false;
      this.salmendras = true;
    },
    verduras() {
      this.CarneVerduras = false;
      this.TomateAlmendras = true;
      this.sverduras = true;
    },
    tomates() {
      this.TomateAlmendras = false;
      this.Salmorejo = true;
      this.mensaje = false;
      this.stomates = true;
    },
    almendrasSaladas() {
      this.TomateAlmendras = false;
      this.AjoBlanco = true;
      this.mensaje = false;
      this.almendrassaladas = true;
      this.salmendrassaladas = true;
    },
    carne() {
      this.CarneVerduras = false;
      this.CerdoOvino = true;
      this.scarne = true;
    },
    cerdo() {
      this.CerdoOvino = false;
      this.Solomillo = true;
      this.mensaje = false;
      this.scerdo = true;
    },
    ovino() {
      this.CerdoOvino = false;
      this.PaletillaCordero = true;
      this.mensaje = false;
      this.sovino = true;
    },
    salado() {
      this.MuestraDulceSalado = false;
      this.CarneVerduras = true;
      this.ssalado = true;
      this.reset = true;
    },
  },
};
</script>
