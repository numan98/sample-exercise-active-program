<script setup lang="ts">
const props = defineProps({
  name: String,
  progressValue: Number,
  initials: String,
  background: String,
});
</script>

<template>
  <div class="program-progress">
    <div class="avatar" :style="`background: #${background}`">
      <img v-if="!initials" src="../assets/avatar.png" alt="" />
      <div v-else class="initials">{{ initials }}</div>
    </div>
    <div class="progress-wrapper">
      <span class="name">{{ name }}</span>
      <div class="bar">
        <div class="progress" :style="`width:${progressValue}%`"></div>
      </div>
      <span class="progress-text">{{ progressValue }}% Complete</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.program-progress {
  display: flex;
  gap: 20px;
  .avatar {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    overflow: hidden;

    img {
      height: 100%;
    }

    .initials {
      line-height: 60px;
      font-weight: bold;
      font-size: 21px;
      text-align: center;
    }
  }
  .progress-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    .name {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 4px;
    }

    .bar {
      position: relative;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: var(--nomadic-deep-blue);
      margin-bottom: 2px;

      .progress {
        position: absolute;
        background: white;
        left: 0;
        height: 100%;
        border-radius: 3px;
      }
    }
  }
}
</style>
