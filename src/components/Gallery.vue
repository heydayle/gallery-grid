<script setup lang="ts">
import { ref } from 'vue';

const photos = [

]
</script>

<template>
  <div class="container"> 
    <h2>Photo Cards:</h2>
    <div class="gallery">
      <div v-for="item in 30" :key="item" class="gallery-item">
        <img :src="`https://dummyimage.com/300x200&text=Photo+${item}`" alt="img">
        <p>This is a photo ratio 300x200 at the card photo {{ item }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
