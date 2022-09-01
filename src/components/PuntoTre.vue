<template>
	<div class="container" >
    <h3>Punto Focal</h3>


    <div class="half-circle">
      
    </div>




	</div>

</template>

<style>


.half-circle {
    width: 200px;
    height: 100px; /* as the half of the width */
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border: 10px solid gray;
    border-bottom: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
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
