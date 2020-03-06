<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <router-link to="/main">main</router-link>
    <router-link to="/news">news</router-link>
    <router-view></router-view>
    <router-view name="test"></router-view>
    {{routerInfo}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    routerInfo(){
      console.log(this.$route);
    }
  },
  methods: {
    goBack(){
      window.history.length > 1 ? this.$route.go(-1) : this.$route.push('/');
    }
  },
  watch: {
    '$route' : function(to, from) {
      console.log(to);
      console.log(from);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

