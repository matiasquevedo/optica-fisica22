<template>
	<div class="iri container mt-5" >

    <div class="bg-accent p-3">
      <h3>Iridiscencia</h3>
    </div>

    <div class="bg-accent p-3 mt-3">
      <p>La iridiscencia es un fenómeno óptico caracterizado como la propiedad de ciertas superficies en las cuales el tono de la luz varía de acuerdo al ángulo desde el que se observa la superficie</p>
    </div>

<!--     <div class="wrapper">

    </div> -->

    <div class="glassy-container text-center ">
      <p>Iridiscencia</p>
      <div class="glassy">
        
      </div>
    </div>



	</div>

</template>

<style>


.wrapper { 
  height: 20vh;
  width: 20vw;
  position: relative;

  background: linear-gradient(4deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 180% 180%;

  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdrop-filter: blur( 7.5px );-webkit-backdrop-filter: blur( 7.5px );
  /*border-radius: 10px;*/
  /*border: 1px solid rgba( 255, 255, 255, 0.18 );*/

  -webkit-animation: rainbow 0.4s ease infinite;
  /*-z-animation: rainbow 0.1s ease infinite;*/
  /*-o-animation: rainbow 0.1s ease infinite;*/
    /*animation: rainbow 0.1s ease infinite;*/
}

.glassy-container{
  margin-top: 3rem;
}

.glassy-container p{
  font-size: 5rem;
  font-family: 'Ultra', serif;
  font-weight: 900;
}

.glassy{
  /* From https://css.glass */
  height: 20vh;
  width: 20vw;
  position: relative;
  left: 30vw;
  bottom: 20vh;
  /*background: rgba(255, 255, 255, 0.15);*/
  background: linear-gradient(130deg, #ffffff33,#ffffff33,#ffffff33,#ffffff33,#ffffff33,#ffffff33, #ff240033, #e81d1d33, #e8b71d33,#ffffff33, #e3e81d1A,#ffffff33, #1de84033, #1ddde81A,#ffffff33, #2b1de833, #dd00f333, #dd00f333, #ffffff33,#ffffff33,#ffffff33,#ffffff33,#ffffff33,#ffffff1A);
  border-radius: 16px;
  background-size: 180% 180%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-animation: rainbow 1.8s linear infinite;
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(6.3px);
  /*border: 1px solid rgba(255, 255, 255, 0.51);*/

  -moz-transform: rotate(-12deg);
  -webkit-transform: rotate(-12deg);
  -o-transform: rotate(-12deg);
  -ms-transform: rotate(-12deg);
  transform: rotate(-12deg);
}

  @-webkit-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-moz-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-o-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @keyframes rainbow { 
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
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
