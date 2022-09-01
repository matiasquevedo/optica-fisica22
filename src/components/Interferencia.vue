<template>
	<div class="punto-distancia container mt-5" >

    <div class="bg-accent p-3">
      <h3>Interferencia</h3>
    </div>

    <div class="parent-interferencia">

      <div class="bg-accent p-3 mt-3">
        <p>
          Fenómeno en el que dos o más ondas se superponen para formar una onda resultante de mayor, menor o igual amplitud.
        </p>
      </div>

      <div class="mt-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Two_sources_interference.gif"  alt="">
      </div>
      
    </div>








	</div>

</template>

<style>



.parent-interferencia{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 0px;
}

.parent-interferencia img{
  width: 100%;
}

</style>

<script>



  export default {
    name: 'Home',

    components: {

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
