<template>
  <div id="app">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>
