<template>
	<div class="intro container mt-5">

		<div class="parent-intro">
			<div class="colums-intro">
				<div class="bg-accent px-5 py-3">
					<h3>
						<b>Ó́ptica</b>, rama de la física,que se ocupa del comportamiento de la luz y otras ondas electromagnéticas.
					</h3>
				</div>

			</div>

			<div class=" colums-intro">
				<Timeline></Timeline>
			</div>
		</div>


	</div>

</template>

<style>

.parent-intro{
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 25px;
	grid-row-gap: 0px;
}

.colums-intro{
	min-height: 200px;
}

</style>

<script>

import Timeline from '@/components/Timeline.vue'

  export default {
    name: 'Home',

    components: {
      Timeline
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
