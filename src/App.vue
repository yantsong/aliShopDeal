<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  background:linear-gradient(#f0f0f0,#f1f1f1);
}
img{
  content: normal !important;
}
[fc] {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 列排列居中 */
[fccm] {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/* 靠左 */
[fcs] {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
/* boxshandow以及圆角 */
[bsd] {
  box-shadow: 0px 8px 35px 0px rgba(177, 177, 177, 0.39);
}
</style>
