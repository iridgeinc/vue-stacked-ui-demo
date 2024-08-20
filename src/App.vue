<script setup lang="ts">
 
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
    <nav>
      <div><RouterLink to="/">Home</RouterLink></div>
      <div><RouterLink to="/sample">Sample</RouterLink></div>
    </nav>
  </header>

  <section id="main">
    <StackRootView />
    <!-- Reserve Drawer Area  -->
    <div id="drawer_wrapper">
      <StackView />
    </div>
    <!-- Reserve Drawer Area -->
  </section>
</template>

<style scoped>
  
 header {
   position:fixed;
   top:0;
   left:0;
   width: 50px;
   height: 100vh;
   padding-top: 20px;
   background-color: #eee;
   text-align:center;
 }

 section#main {
   position: relative;
   left:50px;
   min-height:100vh;
   width:calc(100% - 50px);
 }

 section#main #drawer_wrapper{
   position: fixed;
   pointer-events: none;
   top: 0;
   width: calc(100% - 50px); /* 100% - width of header */
   height:100%;
   overflow-y: hidden;
 }

 nav {
   width: 100%;
   font-size: 25px;
   text-align: center;
   margin-top: 2rem;
 }

 nav a {
   display: inline-block;
   color: #444;
   padding: 0 0rem;
 }

 nav div {
   transform: rotate(90deg);
   margin-bottom: 70px;
 }

</style>
