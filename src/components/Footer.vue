
<template>

	<footer class="footer">
	  <div class="container text-center my-5">
	    <a class="link-jpg" target="_blank" href="/infografia-optica.png">Descargar Infografía</a>
	  </div>

      <div class="container text-center my-5">
        <h1>
            <a class="link-jpg" target="_blank" href="https://github.com/matiasquevedo/optica-fisica22">
                <BIconGithub></BIconGithub>
            </a>
        </h1>
      </div>


      
	</footer>


</template>

<style>

.link-jpg{
	font-family: 'Raleway', sans-serif;
	color: white !important;
	text-decoration: underline;
}


</style>

<script>

import { BIconGithub } from 'bootstrap-vue'


  export default {
    name: 'Home',

    components: {
        BIconGithub
    },

    props: {

    },

    computed: {
    },

    data () {
        return {
        }
        
     },

    methods:{

    },
  }
</script>
