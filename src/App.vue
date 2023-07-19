<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>

  </div>
</template>

<script>


import header from './components/header.vue'
import footer from './components/footer.vue'


export default {
  name: 'App',
  components: {
    'app-header': header,
    'app-footer': footer,
  },
  data(){
    return {
    }
  },

}
</script>

<style>

#app{
    animation: animate 0.5s normal;
}

@keyframes animate {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

body{
  margin: 0px;
  padding: 0px;
}

:root{
  --primary-color: #F2F5FF;
  --secondary-color: #496DE2;
  --icon-color: #496EE3;
  --text-color: #293132;

  --primary-font: 'Montserrat', sans-serif;
}

h1, h2, p, label, input, textarea{
    font-family: var(--primary-font);
    color: var(--text-color);
    font-style: normal;
}

</style>
