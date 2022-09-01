<template>
	<div class="punto-distancia container mt-5" >

    <div class="bg-accent p-3">
      <h3>Punto y Distancia Focal</h3>
    </div>

    <div class="bg-accent p-3 mt-3">
      <p>Para un espejo</p>
    </div>

    <div class="container">
      <div class="parent-punto-distancia">

        <div class="bg-accent p-3 mt-3">
          <h4>Punto Focal</h4>
          <p>El punto focal de un espejo es el punto donde los rayos paralelos convergen después de reflejarse en un espejo cóncavo, o bien, el punto desde el que parecen divergir después de reflejarse en un espejo convexo.</p>

          
        </div>

        <div class="bg-accent p-3 mt-3">
          <h4>Distancia Focal</h4>
          <p> La distancia del punto focal al vértice se llama distancia focal y se denota con f. Los puntos focales de una lente se definen de modo análogo.</p>
        </div>
        
      </div>
    </div>

    <div>
      <PuntoTre></PuntoTre>
    </div>









	</div>

</template>

<style>



.parent-punto-distancia{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 0px;
}

.parent-punto-distancia div{
  max-width: 40vw;
}

</style>

<script>


import PuntoTre from '@/components/PuntoTre.vue'

  export default {
    name: 'Home',

    components: {
      PuntoTre
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
