<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const changePage = (url) => {
  router.push(url);
};

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

const carouselImages = [
  'https://renewalprod.blob.core.windows.net/renewal-prod/cms/articles/content/batchshutterstock552100717jpg_2024-06-10-04-11-52.jpg',
  'https://www.japan-guide.com/g18/3009_01.jpg',
  'https://static.gltjp.com/glt/data/article/21000/20183/20220911_115742_b78e9e75_w1920.webp'
];

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
</script>

<template>
  <main>
    <div class="wrapper" style="min-height: 100vh;">
      <header class="flex w-full p-4 items-center justify-between">
        <div class="logo-container w-1/3 bg-cover bg-center mx-4 scale-150" alt="Instagram"></div>
        <div class="relative w-full">
          <div class="flex items-center w-full justify-end ">
            <i class="fa-regular fa-heart cursor-pointer ml-4 text-gray-500 hover:text-red-500" @click="changePage('./notice')" style="font-size:24px"></i>
            <i class="fa-regular fa-comment-dots ml-4" @click="changePage('./message')" style="font-size:24px"></i>
          </div>
        </div>
      </header>
      <div></div>
      <div class="stories-container flex space-x-4 overflow-x-scroll p-4 bg-gray-100">
        <div v-for="(item, index) in items" :key="index" class="story-item flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 p-1" @click="changePage('./storyviewer')">
          <div class="story-content w-full h-full bg-white rounded-full flex items-center justify-center">
            <img src="https://pbs.twimg.com/profile_images/1869789271995084800/hXyGknPC_400x400.jpg" alt="Profile" class="rounded-full">
          </div>
        </div>
      </div>
      <div class="flex w-full pt-8 pb-4 items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE_tp0FuU8UyXv7mtIHXsyAknZAm3VyiSXQ&s" alt="" class="ml-4 w-23 circle-avatar">
        <p class="font-bold ml-4">HACHIWARE</p>
        <i class="fa-solid fa-ellipsis ml-auto mr-4"></i>
      </div>

      <a-carousel :autoplay="true">
        <div v-for="(image, idx) in carouselImages" :key="idx" class="h-64 !m-0">
          <img class="w-full h-64 object-cover !m-0" :src="image" alt="image">
        </div>
      </a-carousel>

      <div class="container items-center pt-4 pl-1 flex space-x-3" style="font-size:24px">
        <i
          @click="toggleLike"
          :class="[
            'fa-heart cursor-pointer ml-4',
            isLiked ? 'fa-solid text-red-500 scale-110': 'fa-regular text-gray-500',
          ]"
        ></i>
        <i class="fa-regular fa-comment transform scale-x-[-1]"></i>
        <i class="fa-regular fa-paper-plane"></i>
        <div class="bookmark-container absolute right-2 mt-2 mr-2">
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>

      <p class="font-bold ml-4 mt-2">89個讚</p>
      <div class="ml-4">
        <p class="font-bold">HACHIWARE</p>
        <p class="text-gray-700">
          【Cathay Holidays 🌟打造完美旅程】放假去旅行，一鍵就可以展開旅程？ Cathay Holidays 旅遊預訂體驗上線了！
          合作夥伴 @Expedia 網羅全球近百萬間酒店，還有「機票＋酒店」旅遊套票，讓你一站式輕鬆規劃假期！
          同時，還能賺取「亞洲萬里通」里數！<br>
          <a href="https://bit.ly/3W5KQMu" class="text-blue-500 underline" target="_blank">了解更多</a>
        </p>
        <p class="text-gray-700 cursor-pointer">查看全部1957則留言</p>
      </div>

      <div class="flex w-full pt-8 pb-4 items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE_tp0FuU8UyXv7mtIHXsyAknZAm3VyiSXQ&s" alt="" class="ml-4 w-23 circle-avatar">
        <p class="font-bold ml-4">HACHIWARE</p>
        <i class="fa-solid fa-ellipsis ml-auto mr-4"></i>
      </div>
    </div>
  </main>
</template>

<style scoped>
.circle-avatar {
  border-radius: 50%;
}
.banner {
  padding: 20px;
  border: 5px solid #f9c0c0;
  margin: 5px;
  border-radius: 50%;
}

.logo-container {
  height: 40px; 
  background-image: url("@/assets/images/Instagram_logo.svg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>