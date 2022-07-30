<template>
  <div class="main">
    <div class="main_wrapper">
      <Header />
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style lang="scss">
.main{
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.main_wrapper{
  width: 96%;
  min-height: 100%;
}
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
