<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useProgramsStore } from "@/stores/programs";
import ProgressItem from "@/components/ProgressItem.vue";

const props = defineProps({
  program: Object,
});

const programImageUrl = computed(() => {
  let image = encodeURIComponent(props.program.image);
  return `https://res.cloudinary.com/nomadic/image/fetch/w_550,h_715,c_fill,e_blur:0,g_north,f_auto,q_80/${image}`;
});

const teamDetails = ref([]);

const store = useProgramsStore();

onMounted(async () => {
  const data = await store.getTeamDetails(props.program.id);
  teamDetails.value = data;
});

function removeProgram(programId) {
  store.toggleEnrolState(programId, false);
}
</script>

<template>
  <div v-if="teamDetails" class="program-card">
    <div class="program-image">
      <img :src="programImageUrl" :alt="'Cover image for ' + program.title" />
    </div>
    <div class="program-info-wrapper">
      <h3 class="title">{{ program.title }}</h3>
      <div class="progress-items">
        <ProgressItem
          :name="'Your Progress'"
          :progress-value="teamDetails.your_progress"
        />
        <ProgressItem
          :name="`Your Team ${teamDetails.name}`"
          :progress-value="teamDetails.team_progress"
          :initials="teamDetails.initials"
          :background="teamDetails.color"
        />
      </div>
      <div class="actions">
        <button class="primary">Start Program</button>
        <button @click="removeProgram(program.id)" class="secondary">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.program-card {
  background: var(--nomadic-blue);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  min-height: 336px;
  box-sizing: border-box;
  gap: 20px;
  font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
  color: white;

  .program-image {
    flex: 1;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
    max-height: 296px;
    min-width: 228px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .program-info-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      font-size: 24px;
      font-weight: bold;
      line-height: 30px;
    }

    .progress-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .actions {
      display: flex;
      gap: 20px;
      margin-top: auto;
      .primary {
        background: white;
        flex: 2;
      }
      .secondary {
        color: white;
        border: 1pt solid white;
      }
    }
  }
}
</style>
