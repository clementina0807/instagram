<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import productData from '@/mock/data/product.json';

const router = useRouter();
const posts = ref(productData);
const filteredProducts = ref([]);
const searchInput = ref('');

const search = () => {
  if (!searchInput.value) {
    alert('請輸入搜尋關鍵字');
    return;
  }
  router.push(`/search?keyword=${searchInput.value}`);
};

const getCategory = () => {
  const newProducts = posts.value.filter(item => item.category === 'search');
  filteredProducts.value = newProducts;
};

onMounted(() => {
  // 過濾產品數據
  getCategory();
});
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
    <div class="grid grid-cols-3 gap-2 p-4 ">
      <!-- 單個貼文 -->
      <div v-for="(post, index) in filteredProducts" :key="index" class="relative w-full group">
        <img :src="post.image" alt="Post Image" class="w-full h-full object-cover">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-xl transition-opacity duration-300">
          ❤️ {{ post.likes }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>

