<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useSettingStore } from "../stores/useModeStore";

const MODES = {
  FOCUS: 0,
  VIEW: 1
}
const itemHover = ref()
const { mode } = storeToRefs(useSettingStore())
</script>

<template>
  <div class="container">
    <div class="gallery">
      <div v-for="item in 147" :key="item" class="gallery-item">
        <img loading="lazy" :class="{ 'not-focus' : itemHover !== item && itemHover && mode === MODES.FOCUS }" :src="`/images/img (${item+1}).JPG`" alt="img" @mouseenter="itemHover = item" @mouseleave="itemHover = ''">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
