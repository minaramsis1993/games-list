<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --primary-color: #572589;
  --border-color: #e0e0e0;
}
body {
  font-family: 'Tajawal', sans-serif;
  letter-spacing: 0.02rem;
  background: #f5f5f5;
}
</style>
