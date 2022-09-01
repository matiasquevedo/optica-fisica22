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



.parent-di-fra-fre{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 0px;
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


}

div.fren.borde:nth-child(2){
  width: 19vw;
  height: 29vh;

  filter: blur(2px) !important;
  background-color: #201161;
  opacity: 0.8;
  filter: blur(20px);
  z-index: 13;

}

div.fren.borde:nth-child(3){
  width: 19vw;
  height: 29vh;

  filter: blur(2px) !important;
  background-color: #FFFFFF;
  opacity: 0.8;
  filter: blur(2px);
  z-index: 14;

}

div.fren.borde:nth-child(4){
  width: 17vw;
  height: 28vh;

  filter: blur(2px) !important;
  background-color: #201161;
  opacity: 0.8;
  filter: blur(26px);
  z-index: 15;

}

div.fren.borde:nth-child(5){
  width: 16vw;
  height: 27vh;
  background-color: #FFFFFF;
  filter: blur(2px);
  z-index: 20;

}

div.fren.borde4{
  width: 11vw;
  height: 25vh;
  background-color: yellow;

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
