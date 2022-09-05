<template>
	<div class="container" >

        <vue-photo-zoom-pro high-url="aa.jpg" :scale="zoom" type="circle" mgShowOverflow="false">
          <img class="lupa" src="aa.jpg" />
        </vue-photo-zoom-pro>


        <div class="mt-3">

            <div class="text-center"><p>Zoom {{zoom}}x</p></div>

            <b-form-spinbutton id="sb-inline" 
                v-model="zoom" 
                inline
                min="2"
                max="8"
                step="2"
                @change="lupita"
            >
                    
            </b-form-spinbutton>
        </div>


	</div>

</template>

<style>

img.lupa{
    width: 40vw !important;
}





</style>

<script >


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
            zoom:4,
            height:null,
            width:null,
            margin:null,
        }
        
    },

    methods:{

        lupita(){

            var tt = document.getElementsByClassName("zoomer inner-zoomer")
            var cc = document.getElementsByClassName("selector circle")

            console.log(cc[0]);

            if (this.zoom == 2) {

                tt[0].style.width = '185px'
                tt[0].style.height = '185px'
                tt[0].style.margin = '0px'



            }

            if (this.zoom == 4) {

                tt[0].style.width = '115px'
                tt[0].style.height = '115px'
                tt[0].style.margin = '25px'

                cc[0].style.background = 'radial-gradient(circle, rgba(0,0,0,1) 37%, rgba(117,117,117,0) 66%, rgba(255,255,255,0) 94%, rgba(255,255,255,1) 100%)'

            }

            if (this.zoom == 6) {

                tt[0].style.width = '85px'
                tt[0].style.height = '75px'
                tt[0].style.margin = '48px 40px 40px 40px'

                cc[0].style.background = 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(117,117,117,0) 47%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 84%)'

            }

            if (this.zoom == 8) {

                tt[0].style.width = '55px'
                tt[0].style.height = '35px'
                tt[0].style.margin = '67px 57px 57px 57px'

                cc[0].style.background = 'radial-gradient(circle, rgba(0,0,0,0.85) 3%, rgba(117,117,117,0) 47%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.01) 84%)'

            }


               
        }


    },

    mounted(){
        this.lupita()
    }

  }
</script>
