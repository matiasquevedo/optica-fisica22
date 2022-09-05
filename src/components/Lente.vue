<template>
	<div class="punto-distancia container mt-5" >

    <div class="bg-accent p-3">
      <h3>Lente de Aumento Simple</h3>
    </div>

    <div class="bg-accent p-3 mt-3">
      <p>
        La lente de aumento simple es una lente convergente que, cuando el objeto a observar se sitúa a una distancia de la lente que es inferior a su distancia focal, la lente produce una imagen virtual, derecha y de mayor tamaño que el objeto.

      </p>
    </div>

    <div class="bg-accent p-3 mt-3">
      <p>
        El aumento que proporciona una lente convergente es inversamente proporcional a su distancia focal y esta se encuentra relacionada con el radio de curvatura de sus caras. <br><br> Cuanto más pequeña sea una lente y más curvatura tengan sus caras mayor aumento producirá cuando se utilice como lupa.
      </p>
    </div>

    

    <div class="text-center mt-3">
      <Lupa></Lupa>
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

import Lupa from '@/components/Lupa.vue'



  export default {
    name: 'Home',

    components: {
      Lupa
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
