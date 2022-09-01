<template>
	<div class="step" >

        <div class="step-val">
            <h1>
                <span class="badge badge-pill badge-light">{{val}}</span>
            </h1>

        </div>

	</div>

</template>

<style>


</style>

<script>



  export default {
    name: 'Home',

    components: {

    },

    props: {
      val:String
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
