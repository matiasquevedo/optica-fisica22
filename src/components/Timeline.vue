<template>

	<div class="timeline">
	  <div class="c-point left">
	    <div class="content">
	    	<b-button id="popover-top-open">
	    	  <h3>1665</h3>

	    	  <b-popover show placement="top" custom-class="my-popover-class" target="popover-top-open" title="Corpúsculos">
    	      Se pensaba que la luz consistía en corrientes de partículas,llamadas corpúsculos.
    	    </b-popover>
	    	</b-button>
		    <h4>Isaac Newton</h4>
	    </div>
	  </div>
	  <div class="c-point right">
	    <div class="content">

      	<b-button id="popover-top-1873">
      	  <h3>1873</h3>

      	  <b-popover placement="top" custom-class="my-popover-class" target="popover-top-1873" title="¿Ondas?">
    	      Se predijo la existencia de ondas electromagnéticas y calculó su rapidez de propagación.
    	    </b-popover>
      	</b-button>


  	    <h4>Clerk Maxwell</h4>
	    </div>
	  </div>
	    <div class="c-point left">
	      <div class="content" >

	      	<b-button id="popover-top-1887">
	      	  <h3>1887</h3>

	      	  <b-popover placement="top" custom-class="my-popover-class" target="popover-top-1887" title="Sí. Ondas...">
	      	      Se demostró en forma concluyente que la luz en verdad es una onda electromagnética.
	      	    </b-popover>
	      	</b-button>



	  	    <h4>Heinrich Hertz</h4>

	      </div>
	    </div>
	</div>

</template>

<style>

.btn.btn-secondary{
	text-align: left;
	padding: 0px;
	border: none;
}

.my-popover-class{
	color: red !important;
}


/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.c-point {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.c-point::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: #201161;
  border: 4px solid #35D966;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -13px;
}

/* The actual content */
.content {
  padding: 20px 30px;

  position: relative;
  border-radius: 6px;
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
