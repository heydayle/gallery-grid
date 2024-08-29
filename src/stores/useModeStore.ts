import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSettingStore = defineStore('settingStore', () => {
    const mode = ref(1)
    function updateMode(value: number) {
        mode.value = value
    }
    return {
        mode,
        updateMode
    }
})