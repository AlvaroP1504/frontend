<script setup>


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <nav>

    <router-link to="/hello-world">Acerca de</router-link>
  </nav>
  <RouterView />
</template>

