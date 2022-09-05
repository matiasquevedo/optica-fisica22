<template>
	<div class="fresnel container mt-5" >

    <div class="">
      <div class="fren m-1 borde"></div>
      <div class="fren m-2 borde"></div>
      <div class="fren m-3 borde"></div>
      <div class="fren m-3 borde"></div>
      <div class="fren m-3 borde"></div>
    </div>




	</div>

</template>

<style>



.fresnel{
  position: relative;
}

.parent-di-fra-fre div{
  max-width: 40vw;
}

div.fren{
  position: absolute;


}

div.fren.borde:nth-child(1){

  width: 22vw;
  height: 31vh;
  background-color: #FFFFFF;
  opacity: 0.3;
  filter: blur(6px);
  border: 1px white solid;
  z-index: 10;
  animation: move-opacitylowone 6s ease infinite;


}

div.fren.borde:nth-child(2){
  width: 21.5vw;
  height: 29vh;

  filter: blur(2px) !important;
  background-color: #201161;
  opacity: 0.8;
  filter: blur(20px);
  z-index: 13;

}

div.fren.borde:nth-child(3){
  width: 20.8vw;
  height: 27.7vh;

  filter: blur(8px) !important;
  background-color: #FFFFFF;
  opacity: 0.5;
  z-index: 14;
  top: -4px;
  left: 11px;
  animation: move-opacitylowtre 1s ease infinite;

}

div.fren.borde:nth-child(4){
  width: 20.2vw;
  height: 26.5vh;

  filter: blur(6px) !important;
  background-color: #201161;
  opacity: 0.9;
  filter: blur(26px);
  z-index: 15;


}

div.fren.borde:nth-child(5){
  width: 19vw;
  height: 24.3vh;
  background-color: #FFFFFF;
  filter: blur(1px);
  opacity: 1;
  z-index: 20;
  top: 6px; 
  left: 23px;
  animation: move-opacitylow 1s linear infinite;

}

div.fren{
  width: 20vw;
  height: 30vh;
  background-color: white;

}



div.fra-in{
  /*animation: Fraunhofer 2s linear infinite;*/
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
