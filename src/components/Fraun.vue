<template>
	<div class="fraun container mt-5" >

    <div class="flex-column justify-content-evenly">
      <div class="fra">
        <div class="fra-in">
          
        </div>
        
      </div>

      <div class="fra">
        <div class="fra-in">
          
        </div>
        
      </div>

      <div class="fra">
        <div class="fra-in">
          
        </div>
        
      </div>

      <div class="fra fra-center">
        <div class="fra-in">
          
        </div>
        
      </div>

      <div class="fra ">
        <div class="fra-in">
          
        </div>
        
      </div>


      <div class="fra">
        <div class="fra-in">
          
        </div>
        
      </div>

      <div class="fra">
        <div class="fra-in">
          
        </div>
        
      </div>
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

div.fra{
  width: 20vw;
  height: 2vh;
  background-color: white;
  margin-top: 10px;
}

div.fra.fra-center{
  height: 10vh;
}

div.fra:nth-child(1), div.fra:nth-child(7){
  background-color: #FFFFFF61 !important;
  filter: blur(7px);
  animation: move-opacity 1s linear infinite;
}

div.fra:nth-child(2), div.fra:nth-child(6){
  background-color: #FFFFFF7D !important;
  filter: blur(4px);
  animation: move-opacity 4s linear infinite;
}

div.fra:nth-child(3), div.fra:nth-child(5){
  background-color: #FFFFFF9C !important;
  filter: blur(3px);
  animation: move-opacity 0.5s linear infinite;
}

div.fra{
  filter: blur(2px);
  animation: Fraunhofer-tu 2s linear infinite;
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
