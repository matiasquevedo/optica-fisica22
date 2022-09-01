<template>
	<div class="punto-distancia container mt-5" >

    <div class="bg-accent p-3">
      <h3>Difracción</h3>
    </div>

    <div class="bg-accent p-3 mt-3">
      <p>
        Se produce difracción cuando pasa luz a través de una abertura o alrededor de un borde. Cuando la fuente y el observador se encuentran tan lejos de la superficie obstructora, como para considerar como paralelos los rayos salientes, se produce difracción de Fraunhofer. Cuando la fuente y el observador están relativamente cerca de la superficie obstructora, se tiene difracción de Fresnel.
      </p>
    </div>

    <div class="parent-di-fra-fre">
      <div>
        <p>Según Fraunhofer</p>
        <Fraun></Fraun>

      </div>

      <div>
        <p>Según Fresnel</p>
        <Fresnel></Fresnel>
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
