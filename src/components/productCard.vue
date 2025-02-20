<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  product: Object
});

const emits = defineEmits(['click']);
</script>

<template>
  <div @click="$emit('click', product)">
    <img :src="product.image" alt="Product Image" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-bold text-xl">
      ❤️ {{ product.likes }}
    </div>
  </div>
</template>

<style scoped>
/* 添加必要的樣式 */
</style>
