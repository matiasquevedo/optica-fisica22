<template>
	<div class="container" >

        <div class="parent-punto-distancia">

            <div >
                <div class="p-3">                    
                    <h5>Espejo cóncavo</h5>
                </div>
                <img class="folca" src="/focal.gif"  alt="" @mouseover="hovercn = true" @mouseleave="hovercn = false">

                <div :class="hovercn ? 'hovercn' : 'd-none'">
                    <h3>Punto Focal</h3>
                </div>

                <div :class="hovercn ? 'hovercn-distancia' : 'd-none'">
                    <h5>Distancia</h5>
                </div>
            </div>



            <div >
                <div class="p-3">                    
                    <h5>Espejo convexo</h5>
                </div>
                <img class="folca" src="/focal-con.gif"  alt="" @mouseover="hovercx = true" @mouseleave="hovercx = false">
                <div :class="hovercx ? 'hovercx' : 'd-none'">
                    <h3>Punto Focal</h3>
                </div>
            </div>
            
        </div>




	</div>

</template>

<style>

img.folca{
    width: 40vw;
}

.hovercn{
    position: relative;
    bottom: 10.5rem;
    left: 10.5rem;
    width: 20px;
}

.hovercx{
    position: relative;
    bottom: 9.5rem;
    left: 20rem;
    width: 20px;
}

.hovercn-distancia{
    position: relative;
    bottom: 13.5rem;
    left: 22rem;
    width: 20px;
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
            hovercn:false,
            hovercx:false,
        }
        
    },

    methods:{


    },
  }
</script>
