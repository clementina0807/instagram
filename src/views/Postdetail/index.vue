<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import productData from '@/mock/data/product.json';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// 使用 useRouter 來進行頁面跳轉
const router = useRouter();
const route = useRoute();
const postId = ref(route.params.id);
const post = ref(null);

dayjs.extend(relativeTime);

onMounted(() => {
  // 獲取貼文詳情
  post.value = productData.find(item => item.id === Number(postId.value));
});

const post_image = "https://esse.ismcdn.jp/mwimgs/5/4/-/img_54139033807d0d85218ea534cdb45b28447294.jpg";

const formattedTime = computed(() => {
  if (post.value && post.value.createdAt) {
    return dayjs.unix(post.value.createdAt).format('YYYY年MM月DD日');
  }
  return '';
});
</script>

<template>
  <div class="flex py-2 justify-center">
    <div v-if="post">
      <div class="font-bold justify-center flex">hachiware_0501</div>
      <p class="text-center font-black">貼文</p>
      <div class="items-center flex mb-2">
        <img :src="post_image" alt="Post Image" class="circle-avatar" style="width: 30px; height: 30px;">
        <div class="font-bold scale-75">hachiware_0501</div>
      </div>
      <div class="relative w-full aspect-square border border-solid border-black">
        <img :src="post.image" alt="Post Image" class="w-full h-full object-cover">
      </div>
      <div class="flex items-center mx-4 gap-4 mt-2">
        <p>❤️ {{ post.likes }}</p>
        <i class="fa-regular fa-comment transform scale-x-[-1]"></i>
        <i class="fa-regular fa-paper-plane"></i>
        <i class="fa-regular fa-bookmark right-2 mr-2 absolute"></i>
      </div>
      <p class="text-gray-500 mx-1 scale-90">{{ formattedTime }}</p>
    </div>
    <div v-else>
      <p>貼文未找到</p>
    </div>
  </div>
</template>

<style scoped>
/* 添加必要的樣式 */
</style>