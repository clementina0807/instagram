<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import storiesData from '@/mock/data/stories.json';

const router = useRouter();
const route = useRoute();
const storiesId = ref(route.params.id || 1);
const stories = ref(storiesData);
const currentStory = ref(null);
const currentIndex = ref(stories.value.findIndex(item => item.id === Number(storiesId.value)));
let autoPlayInterval = null;

onMounted(() => {
  currentStory.value = stories.value.find(item => item.id === Number(storiesId.value));
  startAutoPlay();
});

watch(() => route.params.id, (newId) => {
  storiesId.value = newId;
  currentIndex.value = stories.value.findIndex(item => item.id === Number(storiesId.value));
  currentStory.value = stories.value[currentIndex.value];
});

const prevStory = () => {
  if (currentIndex.value > 0) {
    const prevStoryId = stories.value[currentIndex.value - 1].id;
    router.push({ params: { id: prevStoryId } });
  }
};

const nextStory = () => {
  if (currentIndex.value < stories.value.length - 1) {
    const nextStoryId = stories.value[currentIndex.value + 1].id;
    router.push({ params: { id: nextStoryId } });
  }
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextStory();
  }, 5000); // 每 5 秒切換一次
};

onUnmounted(() => {
  clearInterval(autoPlayInterval);
});
</script>

<template>
  <div class="story-viewer">
    <div class="storiesData">
      <div v-if="currentStory" class="story-content">
        <img :src="currentStory.media_url || 'placeholder.jpg'" alt="限時動態" class="text-white" />
        <div class="story-caption">{{ currentStory.caption }}</div>
      </div>

      <!-- 控制按鈕 -->
      <button class="nav-button prev" @click="prevStory">‹</button>
      <button class="nav-button next" @click="nextStory">›</button>
    </div>

    <!-- 限時動態進度條 -->
    <div class="progress-bar">
      <div
        v-for="(story, index) in stories"
        :key="story.id"
        class="progress-item"
        :class="{ active: index === currentIndex.value }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.story-viewer {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.storiesData{
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #000000;
}

.story-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 16px;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.progress-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.progress-item {
  flex: 1;
  height: 4px;
  background-color: #ccc;
  margin: 0 2px;
  border-radius: 2px;
}

.progress-item.active {
  background-color: #007bff;
}
</style>