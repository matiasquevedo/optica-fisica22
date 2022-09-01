<template>

  <div class="notas-container">
    <div class="notas">
      <h2>Nota:</h2>
      <p>{{note}}</p>
      <p class="text-center">
        n = <sup>c</sup> / <sub>v</sub> 
      </p>
    </div>
  </div>

</template>

<style>

div.notas-container{
  background-color: #201161 !important;
  transform: rotate(10deg);
}

div.notas{
  overflow:hidden;
  padding:10px;

  text-decoration:none;
  color:#000;
  background:#78e898 !important;

  display:block;
  height:35vh;
  width:35vh;

  border-radius: 4px;

  box-shadow: 15px 10px 21px 0 rgba(0, 0, 0, 0.8);

  /*transform: rotate(10deg);*/

  transition: transform .2s;

}

div.notas * {
  color:#000;
  background:#78e898 !important;
  font-family: 'Pacifico', cursive;
}

div.notas h2 {
  font-size: 1.5rem;
  font-weight: 900;
}

div.notas p {
  font-size: 0.8rem;
  /*font-weight: 900;*/
}

div.notas:hover{
  transform: rotate(5deg) scale(2);
}


</style>

<script>



  export default {
    name: 'Home',

    components: {

    },

    props: {
      note:String
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
