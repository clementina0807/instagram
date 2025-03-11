<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import productData from '@/mock/data/product.json';

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
const products = ref(productData);
const filteredProducts = ref([]);

const getCategory = () => {
  const newProducts = products.value.filter(item => item.category === 'person');
  filteredProducts.value = newProducts;
};

onMounted(() => {
  getCategory();
});



</script>

<template>
  <div class="flex justify-between items-center mt-6 mx-4 text-xl font-black">
    <div>hachiware_0501</div>
    <div class="flex space-x-4">
      <i class="fa-brands fa-threads"></i>
      <i class="fa-solid fa-plus"></i>
      <i class="fa-solid fa-list"></i>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <div class="flex w-full pt-8 items-center justify-center mr-8 text-center">
      <img
        src="https://esse.ismcdn.jp/mwimgs/5/4/-/img_54139033807d0d85218ea534cdb45b28447294.jpg"
        alt=""
        class="mx-8 circle-avatar"
        style="width: 60px; height: 60px;"
      />

      <div class="flex">
        <div v-for="(item, index) in stats" :key="index" class="mx-4">
          <p class="font-bold">{{ item.value }}</p>
          <p class="text-gray-500 text-sm">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
  <p class="font-bold mt-4 scale-110 mx-8">{{ username }}</p>

  <div class="flex w-full justify-around pt-6 scale-110">
    <i class="fa-solid fa-calendar-days"></i>
    <i class="fa-solid fa-face-grin-hearts"></i>
    <i class="fa-solid fa-photo-film"></i>
    <i class="fa-solid fa-house-user"></i>
  </div>

  <div class="grid grid-cols-3 p-0 mt-8">
    <div v-for="(post, index) in filteredProducts" :key="index" class="relative w-full aspect-square ">
      <img :src="post.image" alt="Post Image" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-bold text-xl" @click="changePage(`/postdetail/${post.id}`)">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>