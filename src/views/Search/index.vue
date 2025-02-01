<script setup>
import { ref } from 'vue';
import productData from '@/mock/data/product.json';

const posts = ref(productData);
const searchInput = ref('');

const search = () => {
  console.log('Search input:', searchInput.value);
};
</script>

<template>
  <main>
    <div class="flex justify-center mt-4">
      <div class="relative flex justify-between w-[80%] max-w-md">
        <i class="fa-solid fa-magnifying-glass absolute left-3 text-gray-500 flex items-center mt-2"></i>
        <input
          v-model="searchInput"
          class="pl-10 pr-2 bg-slate-200 rounded h-9 w-full"
          @keydown.enter="search"
          placeholder="搜尋"
        />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 p-4 bg-gray-100 border-black border">
      <!-- 單個貼文 -->
      <div v-for="(post, index) in posts" :key="index" class="relative w-full aspect-square bg-gray-300 border-black border-4">
        <img :src="post.image" alt="Post Image" class="w-full h-full object-cover border-black border-2">
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-bold text-xl">
          ❤️ {{ post.likes }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* ...existing code... */
</style>