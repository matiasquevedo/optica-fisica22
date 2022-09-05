<template>
	<div class="punto-distancia container mt-5" >

    <div class="bg-accent p-3">
      <h3>Difracción</h3>
    </div>

    <div class="bg-accent p-3 mt-3">
      <p>
        Se produce difracción cuando pasa luz a través de una abertura o alrededor de un borde. 
      </p>
    </div>

    <div class="parent-di-fra-fre">
      <div>
        <p class="mt-3 segun-fra">Según Fraunhofer <span class="ml-4 px-2 bg-accent">Abertura</span></p>

        <div class="bg-accent di-descrip py-3 px-2">
          <p>
            Cuando la fuente y el observador se encuentran tan lejos de la superficie obstructora, como para considerar como paralelos los rayos salientes, se produce difracción de Fraunhofer. 
          </p>
        </div>

        <div class="di-animation text-center">
          <Fraun></Fraun>
        </div>

        
      </div>

      <div>
        <p class="mt-3 segun-fre">Según Fresnel <span class="ml-4 px-2 bg-accent">Borde</span></p>

        <div class="bg-accent di-descrip py-3 px-2">
          <p>
            Cuando la fuente y el observador están relativamente cerca de la superficie obstructora, se tiene difracción de Fresnel.
          </p>
        </div>

        <div class="di-animation text-center">
          <Fresnel></Fresnel>
        </div>

        
      </div>
    </div>






	</div>

</template>

<style>



.parent-di-fra-fre{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 0px;
}

.parent-di-fra-fre div{
  max-width: 40vw;
}

.di-descrip{
  min-height: 35vh;
}

</style>

<script>

import Fraun from '@/components/Fraun.vue'
import Fresnel from '@/components/Fresnel.vue'


  export default {
    name: 'Home',

    components: {
      Fraun,
      Fresnel
    },

    props: {

    },

    computed: {
    },

    data () {
        return {
            luz: true,
        }
        
    },

    methods:{


    },
  }
</script>
