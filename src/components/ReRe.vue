<template>
	<div class="rere container mt-5" >

		<div class="title bg-accent p-3 d-flex justify-content-center">
			<h2 class="mr-3 reflexion">Reflexión</h2>
            <h2 class="mr-3">y</h2>
            <h2 class="mr-3 refraccion">Refracción</h2>
		</div>


		<div class="description mt-3 bg-accent p-3">

      <h3>Reflexión</h3>
      <p>Es el cambio de dirección de un rayo u onda, que ocurre en la superficie de separación entre dos medios, de la forma que regresa al medio inicial</p>

      <div class="text-center lenguaje-matematico">
        En lenguaje matemático:
        <h3>θ <sub>r</sub> = θ <sub>a</sub></h3>
      </div>

      <div class="camera-rere">        
        <Camera></Camera>
      </div>




      
      <br>

      <h3>Refracción</h3>
      <p>Cambio de dirección de un rayo de luz u otra radiación que se produce al pasar oblicuamente de un medio a otro de distinta densidad.</p>

      <div class="text-center lenguaje-matematico-refraccion">
        En lenguaje matemático:
        <h3>
          n <sub>a</sub> . sen θ <sub>a</sub>  = n <sub>b</sub> . sen θ <sub>b</sub> 
        </h3>

      </div>

      <div class="post-it">
        <Postit note="El índice de refracción de un material óptico (n), es la razón entre la rapidez de la luz en el vacío (c) y la rapidez de la luz en el material (v):"></Postit>
      </div>



		</div>


    <div class="indice-refraccion">
      
    </div>

    

	</div>

</template>

<style>

.velocidad-luz{
	max-width: 41.5vw;
}

.reflexion{

}

.indice-refraccion{
  width: 20vw;
  height: 20vh;
  text-align: justify;
}



.tt{
	width: 200px;
	height: 200px;
	position: absolute;
	background-color: red;
	border-radius: 50% 50%;
}



</style>

<script>

import Camera from '@/components/Camera.vue'
import Postit from '@/components/Postit.vue'


  export default {
    name: 'Home',

    components: {
        Camera,
        Postit,

    },

    props: {

    },

    computed: {
    },

    data () {
        return {
            luz: true,
            isCameraOpen: false,
            canvasHeight:600,
            canvasWidth:600,
            items: [],
            velocidad:{
            	val: '299.800.000',
            	de: 'm',
            	mu: 's',
            }
        }
        
    },

    methods:{
        toggleCamera() {
            if (this.isCameraOpen) {
                this.isCameraOpen = false;
                this.stopCameraStream();
            } else {
                this.isCameraOpen = true;
                this.startCameraStream();
            }
        },

        startCameraStream() {
          const constraints = (window.constraints = {
            audio: false,
            video: true
          });
          navigator.mediaDevices
              .getUserMedia(constraints)
              .then(stream => {
                this.$refs.camera.srcObject = stream;
              }).catch(error => {
            alert("Browser doesn't support or there is some errors." + error);
          });
        },

        stopCameraStream() {
          let tracks = this.$refs.camera.srcObject.getTracks();
          tracks.forEach(track => {
            track.stop();
          });
        },




    },
  }
</script>
