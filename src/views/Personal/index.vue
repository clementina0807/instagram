<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 使用 useRouter 來進行頁面跳轉
const router = useRouter();
const changePage = (url) => {
  router.push(url);
};

const username = ref("ハチワレ");
const stats = ref([
  { label: "則貼文", value: 10 },
  { label: "位粉絲", value: "1.2K" },
  { label: "追蹤中", value: 230 }
]);
</script>

<template>
  <div class="flex justify-between items-center mt-6 mx-4 text-2xl font-black">
    <div>username_number</div>
    <div class="flex space-x-4">
      <i class="fa-brands fa-threads"></i>
      <i class="fa-solid fa-plus"></i>
      <i class="fa-solid fa-list"></i>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <!-- 頭像與數據組合在同一行 -->
    <div class="flex w-full pt-8  items-center justify-center mr-8 text-center">
      <!-- 頭像 -->
      <img
        src="https://esse.ismcdn.jp/mwimgs/5/4/-/img_54139033807d0d85218ea534cdb45b28447294.jpg"
        alt=""
        class="mx-8 circle-avatar"
        style="width: 60px; height: 60px;"
      />

      <!-- 貼文/粉絲/追蹤中 -->
      <div class="flex">
        <div v-for="(item, index) in stats" :key="index" class="mx-4">
          <p class="font-bold">{{ item.value }}</p>
          <p class="text-gray-500 text-sm">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 使用者名稱 -->
  <p class="font-bold mt-4 scale-110 mx-12">{{ username }}</p>

<div class="flex w-full ">
  <i class="fa-solid fa-calendar-days"></i>
   <i class="fa-solid fa-face-grin-hearts"></i>
    <i class="fa-solid fa-photo-film"></i>
    <i class="fa-solid fa-house-user"></i>
</div>
</template>


<style scoped>
/* 添加必要的樣式 */
</style>