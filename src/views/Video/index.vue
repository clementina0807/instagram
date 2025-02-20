<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const videos = ref([
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { src: 'https://www.w3schools.com/html/movie.mp4' },
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
]);
</script>

<template>
  <swiper
    :modules="[Autoplay]"
    direction="vertical"
    :loop="true"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    class="h-screen w-full"
  >
    <swiper-slide v-for="(video, index) in videos" :key="index" class="flex items-center justify-center">
      <video
        :src="video.src"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover"
      ></video>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
/* 確保影片滿版 */
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>