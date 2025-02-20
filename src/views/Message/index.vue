<script setup>
import { ref } from 'vue';

const searchInput = ref('');
const items = ref([
  { id: 1, image: 'https://imgproxy.lang.live/1/auto/640/0/sm/0/aHR0cHM6Ly9hc3NldHMubGFuZy5saXZlL3VzZXIvNjU3NzIwNi8zMzE0YjkyNzY3ZTcwYTYyODEyOWUzZjkyYzA4ODg3Zg==', name: 'usagi', number: 3 },
  { id: 2, image: 'https://imgproxy.lang.live/1/auto/640/0/sm/0/aHR0cHM6Ly9hc3NldHMubGFuZy5saXZlL3VzZXIvNjU3NzIwNi8zMzE0YjkyNzY3ZTcwYTYyODEyOWUzZjkyYzA4ODg3Zg==', name: 'usagi', number: 5 },
  { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9lSLUTZ82FTXkpMTC6DcYurtIJIJ43e6ZA&s', name: 'Chiikawa', number: 2 },
  { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9lSLUTZ82FTXkpMTC6DcYurtIJIJ43e6ZA&s', name: 'Chiikawa', number: 2 },
  { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9lSLUTZ82FTXkpMTC6DcYurtIJIJ43e6ZA&s', name: 'Chiikawa', number: 4 },
  { id: 6, image: 'https://gw.alicdn.com/imgextra/i2/504096749/O1CN01ssbelo1zj5wG5FQ9c_!!504096749.jpg_Q75.jpg_.webp', name: 'モモンガ', number: 10 },
  { id: 7, image: 'https://gw.alicdn.com/imgextra/i2/504096749/O1CN01ssbelo1zj5wG5FQ9c_!!504096749.jpg_Q75.jpg_.webp', name: 'モモンガ', number: 1 },
  { id: 8, image: 'https://livedoor.blogimg.jp/anigei-mangabox/imgs/b/5/b5aa1349.jpg', name: 'あのこ', number: 7 },
  { id: 9, image: 'https://livedoor.blogimg.jp/anigei-mangabox/imgs/b/5/b5aa1349.jpg', name: 'あのこ', number: 8 },
  { id: 10, image: 'https://livedoor.blogimg.jp/anigei-mangabox/imgs/b/5/b5aa1349.jpg', name: 'あのこ', number: 5 }

]);
// 定義 items 陣列

const search = () => {
  console.log('Search triggered with query:', searchInput.value);
  // 在這裡添加搜索邏輯
};

// 自動滾動的功能（可選）
let scrollPosition = 0;
setInterval(() => {
  scrollPosition += 100; // 每次滾動 100px
  if (scrollPosition >= storiesContainer.scrollWidth) {
    scrollPosition = 0; // 滾動到結尾後返回
  }
  storiesContainer.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
}, 3000); // 每 3 秒滾動一次
</script>

<template>
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
  <div class="stories-container flex space-x-4 overflow-x-scroll p-4 bg-gray-100">
    <div v-for="(item, index) in items" :key="index" class="story-item flex-shrink-0 w-20 h-20 rounded-full p-1">
      <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
        <img :src="item.image" alt="Profile" class="rounded-full">
      </div>
      <ul class="text-center">{{ item.name }}</ul>
    </div>
  </div>
 <div class="flex flex-col space-y-6 bg-gray-100 p-6 mt-4 ">訊息
  <div v-for="(item, index) in items" :key="index" class="flex items-center space-x-4">
    <img :src="item.image" alt="Profile" class="w-10 h-10 rounded-full">
    <div class="flex flex-col">
      <div>{{ item.name }}</div>
      <div class="text-gray-500">{{ item.number }} 則新訊息</div>
    </div>
  </div></div>


 
</template>

<style scoped>
/* 添加必要的樣式 */
</style>