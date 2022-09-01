<template>
  <div id="app">
    <canvas id='map'></canvas>

    
    <!-- <notifications group="foo" /> -->
    <router-view/>

    <Footer></Footer>
    
  </div>
</template>

<style >
@import './assets/base.scss';
@import './assets/viewports/landscape-320-812.scss';
@import './assets/viewports/portrait-320-767.scss';
@import './assets/viewports/portrait-768-991.scss';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#map {
    position: fixed;
    top: 15px;
    right: 20px;
    width: 200px;
    height: 100%;
    z-index: 10000;
    background-color: rgba(255,255,255,0.3) !important;
}



</style>

<script>
// @ is an alias to /src
// import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { mapMutations } from "vuex";
import pagemap from "pagemap"


export default {
  name: 'Home',
  components: {
    // NavBar,
    Footer,
  },
  computed: {
  },
  data(){
    return{
      name:this.$store.state.companyName
    }
  },
  methods:{
    ...mapMutations(["setUser", "setToken", "setAdmin", "setUserData"]),

  },

  mounted(){
    let pageMap = document.querySelector('#map')
    pagemap(pageMap, {
        viewport: null,
        styles: {
            'header,section,article': 'rgba(0,0,0,0.8)',
            'h1,a,div.title,div.timeline,footer.footer, img': 'rgba(0,0,0,0.1)',
            'h2,h3,h4,button': 'rgba(0,0,0,0.08)',
            'div.bg-accent':'rgba(0,0,0,0.1)',
        },
        back: 'rgba(255,255,255,0.02)',
        view: 'rgba(0,0,0,0.1)',
        drag: 'rgba(255,255,255,0.2)',
        interval: null
    });
  }
}
</script>
