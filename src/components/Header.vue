<script setup lang="ts">
import { useSettingStore } from "../stores/useModeStore";
const MODES = [
  {
    label: 'Focus',
    value: 0,
  },
  {
    label: 'Normal',
    value: 1,
  },
]
const settingStore = useSettingStore()
</script>

<template>
  <nav class="header">
    <div class="container">
      <a class="logo" href="/">
        <div class="logo-content">THINK</div>
      </a>
      <div>
        <button
            v-for="item in MODES"
            @click="settingStore.updateMode(item.value)"
            class="button-mode"
            :class="settingStore.mode === item.value ? 'button-mode-active' : ''"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
