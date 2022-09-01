<template>
	<div class="home container my-5">
		<div class="d-lg-flex">
			<div class="container">
				<h1 class="title">
					<span>7</span> conceptos clave para dominar la
					<div :class="luz ? 'title text-flicker-in-glow' : 'title luz-off'">
						Óopt!ca
					</div>
				</h1>
				

				<div class="bg-accent segun p-0">
					<p>Según Sears ⦿ Zemansky</p>
				</div>

				<div class="form-check form-switch">
				  <input class="form-check-input" type="checkbox" v-model="luz" role="switch" id="flexSwitchCheckDefault">

				</div>

			</div>
			<div class="container p-4 bg-accent">
				<h4>Universidad de Mendoza - <b>Física</b> - 2022</h4>
				<h4>Ramiro <b>Giandinoto</b></h4>
				<h4>Matías <b>Quevedo Cotela</b></h4>
			</div>
		</div>

		<div>
			<step val="1"></step> 
			<Introduction></Introduction>
		</div>

		<div>
			<step val="2"></step> 
			<Velocidad></Velocidad>
		</div>

		<div>
			<step val="3"></step> 
			<ReRe></ReRe>
		</div>
		
		<div>
			<step val="4"></step> 
			<PuntoDistancia></PuntoDistancia>
		</div>

		<div>
			<step val="5"></step> 
			<Lente></Lente>
		</div>

		<div>
			<step val="6"></step> 
			<Interferencia></Interferencia>
		</div>

		<div>
			<step val="7"></step> 
			<Difraccion></Difraccion>
		</div>

		<div>
			<step val="8"></step> 
			<Iridiscencia></Iridiscencia>
		</div>
		

	</div>

</template>

<style>
	.title{
		font-weight: 900;
		font-size: 55px;
	}

	.luz-off{
		font-family: 'Ultra', serif;
		color: black !important;
		filter: blur(4px);
	}

	.segun{
		width: 250px;
		text-align: center;
		font-family: 'Raleway', sans-serif !important;
		-moz-transform: scale(1.1) rotate(-10deg) translate(180px, 20px);
		-webkit-transform: scale(1.1) rotate(-10deg) translate(180px, 20px);
		-o-transform: scale(1.1) rotate(-10deg) translate(180px, 20px);
		-ms-transform: scale(1.1) rotate(-10deg) translate(180px, 20px);
		transform: scale(1.1) rotate(-10deg) translate(180px, 20px);

		box-shadow: 17px 10px 16px 1px rgba(0,0,0,0.75);
		-webkit-box-shadow: 17px 10px 16px 1px rgba(0,0,0,0.75);
		-moz-box-shadow: 17px 10px 16px 1px rgba(0,0,0,0.75);
	}

	.segun p{

		font-size: 1rem !important;
	}
</style>

<script>

import step from '@/components/step.vue'
import Introduction from '@/components/Introduction.vue'
import Velocidad from '@/components/Velocidad.vue'
import ReRe from '@/components/ReRe.vue'
import Iridiscencia from '@/components/Iridiscencia.vue'
import PuntoDistancia from '@/components/PuntoDistancia.vue'
import Lente from '@/components/Lente.vue'
import Interferencia from '@/components/Interferencia.vue'
import Difraccion from '@/components/Difraccion.vue'


  export default {
    name: 'Home',

    components: {
    	step,
    	Introduction,
    	Velocidad,
    	ReRe,
    	Iridiscencia,
    	PuntoDistancia,
    	Lente,
    	Interferencia,
    	Difraccion     
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
