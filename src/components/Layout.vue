<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const changePage = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- 插槽 (slot) 用於顯示不同的頁面內容 -->
    <slot />
    <!-- 底部導航欄 -->
    <div class="fixed bottom-0 left-0 w-full h-16 flex items-center justify-around bg-slate-100" style="font-size:24px">
      <i class="fa-solid fa-house" @click="changePage('/home')"></i>
      <i class="fa-regular fa-compass" @click="changePage('/search')"></i>
      <i class="fa-regular fa-square-plus"></i>
      <i class="fa-solid fa-photo-film" @click="changePage('/video')"></i>
      <div class="personal w-10 h-10">
        <div class="story-content w-full bg-slate-100 rounded-full flex items-center justify-center">
          <img src="https://shoplineimg.com/6266777f235687000715a4d3/66d346c3f5ae604da7bb7d49/800x.jpg?" alt="Profile" class="rounded-full" @click="changePage('/personal')">
        </div>
      </div>
    </div>
  </div>
</template>

