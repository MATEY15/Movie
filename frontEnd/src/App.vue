<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/movies">Movies</router-link> |
    <router-link to="/todolist">ToDo</router-link> |
    <router-link to="/sincos">SinCos</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "./style/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
