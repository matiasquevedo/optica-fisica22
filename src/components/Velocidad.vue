<template>
	<div class="velocidad container mt-5" >

		<div class="bg-accent p-4 velocidad-luz">
			<h2>Velocidad de la Luz</h2>
		</div>


		<div class="description bg-accent p-3">
			<p>Sin importar cuál sea su fuente, la radiación electromagnética viaja en el vacío con la misma rapidez.</p>

			<p>La rapidez de la luz en el vacío siempre es:</p>

			<div class="text-center">
				<h2 class="velocidad-luz-valor">
					{{velocidad.val}} <sup style="z-index:0 !important;">{{velocidad.de}}</sup><span style="position:relative;z-index:10 !important;">&frasl;</span><sub>{{velocidad.mu}}</sub>
				</h2>

				<div class="d-flex justify-content-around mt-5">
					<button class="btn btn-success" :disabled="velocidad.val == '299.800.000' ? true : false" @click="changeUnits('m')">m/s</button>
					<button class="btn btn-success" :disabled="velocidad.val == '299.800' ? true : false" @click="changeUnits('mh')">km/s</button>
					<button class="btn btn-success" :disabled="velocidad.val == '1.079.280.000' ? true : false" @click="changeUnits('km')">km/h</button>
				</div>
			</div>
		</div>


	</div>

</template>

<style>

.velocidad-luz{
	max-width: 41.5vw;
}



.tt{
	width: 200px;
	height: 200px;
	position: absolute;
	background-color: red;
	border-radius: 50% 50%;
}

.velocidad .description{
    font-size: 1.3rem;
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
            velocidad:{
            	val: '299.800.000',
            	de: 'm',
            	mu: 's',
            }
        }
        
    },

    methods:{

    	changeUnits(unit){

    		console.log(unit);

    		if(unit === 'm'){
    			this.velocidad.val = '299.800.000'
    			this.velocidad.de = 'm'
    			this.velocidad.mu = 's'
    		}

    		if(unit === 'km'){
    			this.velocidad.val = '1.079.280.000'
    			this.velocidad.de = 'km'
    			this.velocidad.mu = 'h'
    		}

    		if(unit === 'mh'){
    			this.velocidad.val = '299.800'
    			this.velocidad.de = 'km'
    			this.velocidad.mu = 's'
    		}

    	},



    },
  }
</script>
