<template>

  <div class="text-center mt-4">
          <div>
              <div class="camera-button">
                  <button type="button" class="btn btn-info is-rounded cam-button"
                          
                          @click="toggleCamera"
                  >
                    <span v-if="!isCameraOpen">
                      Click para experimentar la Reflexion
                    </span>
                    <span v-else>
                      <img style="height: 25px;" class="button-img" src="https://img.icons8.com/material-outlined/50/000000/cancel.png"></span>
                  </button>
              </div>
          </div>
          <div >
              <div v-if="isCameraOpen" class="camera-canvas">
                  <video class="video-camera-re" ref="camera" autoplay></video>
                  <canvas v-show="false" id="photoTaken" ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
              </div>
          </div>
  </div>

</template>

<style>


.camera-box {
  width: 80%;
  min-height: 150px;
  text-align: center;
}

.camera-canvas{
  overflow:hidden;
  height: 50vh;
}

video.video-camera-re{
  width: 100%;
  margin-top: -210px;
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
            isCameraOpen: false,
            canvasHeight:600,
            canvasWidth:600,
            items: [],
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
