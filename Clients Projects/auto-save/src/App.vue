<template>
  <div id="app">
    <!-- <Nav /> -->
    <div class="container mx-auto">
      <!-- ... -->
      <div class="flex justify-center">
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"></div>
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <router-view />
        </div>
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import Nav from "./components/Nav";
export default {
  components: {
    // Nav,
  },
};
</script>
<style lang="scss"></style>
