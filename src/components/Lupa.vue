<template>
	<div class="container" >

        <vue-photo-zoom-pro high-url="aa.jpg">
          <img class="lupa" src="aa.jpg" />
        </vue-photo-zoom-pro>


	</div>

</template>

<style>

img.lupa{
    width: 40vw;
}

</style>

<script>


import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'


  export default {
    name: 'Home',

    components: {
        vuePhotoZoomPro
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
