<script setup>
import { ref } from 'vue';


const notifications = ref([
  {
    id: 1,
    userAvatar: "https://imasoku.com/wp-content/uploads/2022/05/%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F.jpg",
    username: "シーサー",
    message: "開始追蹤你。",
    timestamp: "1小時前",
    type: "follow", 
    isRead: false,
    isFollowing: false
  },
  {
    id: 2,
    userAvatar: "https://img07.shop-pro.jp/PA01455/769/product/176474153.jpg?cmsp_timestamp=20230805092248",
    username: "ラッコ",
    message: "說你的限時動態讚。",
    timestamp: "2小時前",
    type: "storyLike", 
    isRead: false
  },
  {
    id: 3,
    userAvatar: "https://imasoku.com/wp-content/uploads/2022/05/%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F.jpg",
    username: "シーサー",
    message: "說你的限時動態讚。",
    timestamp: "3小時前",
    type: "storyLike", 
    isRead: false
  }
  ,
  {
    id: 4,
    userAvatar: "https://img07.shop-pro.jp/PA01455/769/product/176474153.jpg?cmsp_timestamp=20230805092248",
    username: "ラッコ",
    message: "開始追蹤你。",
    timestamp: "2小時前",
    type: "follow",
    isRead: true,
    isFollowing: true

  }
]);


const markAsRead = (notification) => {
  notification.isRead = true;
};


const markAllAsRead = () => {
  notifications.value.forEach(notification => {
    notification.isRead = true;
  });
};

const deleteNotification = (notification) => {
  notifications.value = notifications.value.filter(n => n.id !== notification.id);
};

const handleFollow = (notification) => {
  notification.isFollowing = !notification.isFollowing;
  if (notification.isFollowing) {
    alert(`你已追蹤 ${notification.username}`);
  } else {
    alert(`你已取消追蹤 ${notification.username}`);
  }
};

const viewStory = (notification) => {
  alert(`查看 ${notification.username} 的限時動態`);
};
</script>

<template>
  <div class="notification-container">
    <div class="notification-header">
      <h2 class="text-xl font-bold">通知</h2>
      <button @click="markAllAsRead" class="text-blue-500 hover:text-blue-700">
        標記所有為已讀
      </button>
    </div>

    <div class="notification-list">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notification-item"
        :class="{ 'unread': !notification.isRead }"
      >
        <div class="notification-content">
          <img :src="notification.userAvatar" alt="User Avatar" class="avatar" />
          <div class="text">
            <p>
              <span class="font-bold">{{ notification.username }}</span>
              {{ notification.message }}
              <span v-if="notification.type === 'storyLike'" class="text-blue-500 cursor-pointer" @click="viewStory(notification)">
                查看限時動態
              </span>
            </p>
            <p class="timestamp">{{ notification.timestamp }}</p>
          </div>
        </div>

        <div class="notification-actions">
          <button v-if="notification.type === 'follow'" @click="handleFollow(notification)" class="action-button follow-button">
            {{ notification.isFollowing ? '追蹤中' : '追蹤' }}
          </button>
          <button @click="markAsRead(notification)" class="action-button">
            <i class="fa-regular fa-check-circle"></i>
          </button>
          <button @click="deleteNotification(notification)" class="action-button">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.notification-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
}

.notification-item.unread {
  background-color: #e3f2fd;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.text {
  flex: 1;
}

.timestamp {
  font-size: 12px;
  color: #666;
}

.notification-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.action-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
}

.action-button:hover {
  color: #000;
}

.follow-button {
  background-color: #0095f6;
  color: #fff;
  border: none;
  padding: 5px 15px; 
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 80px;
  text-align: center;
}

.follow-button:hover {
  background-color: #0077c2;
}
</style>