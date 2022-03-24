<script setup lang="ts">
import { computed } from "vue";
import ProgramTile from "@/components/ProgramTile.vue";
import EnrolledProgram from "@/components/EnrolledProgram.vue";
import { useProgramsStore } from "@/stores/programs";

const store = useProgramsStore();
store.loadPrograms();

const enrolledPrograms = computed(() => {
  if (store.programs) {
    return store.programs.filter((program) => program.enrolled === true);
  }
});

function enrolToProgram(programId) {
  store.toggleEnrolState(programId, true);
}
</script>

<template>
  <main>
    <section>
      <h2>Enrolled Programs</h2>
      <div class="enrolled-programs-grid" v-if="enrolledPrograms?.length > 0">
        <EnrolledProgram
          :program="program"
          v-for="program in enrolledPrograms"
          :key="program.id"
        />
      </div>
      <p v-else>
        You have not enrolled in any Programs yet. Click on a Program below to
        enrol.
      </p>
    </section>
    <section>
      <h2>All Programs</h2>
      <div class="tiles" v-if="store.programs !== null">
        <ProgramTile
          @click="enrolToProgram(program.id)"
          :program="program"
          v-for="program in store.programs"
          :key="program.id"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  margin-bottom: 3em;
}

h2 {
  margin-bottom: 1em;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
}
.enrolled-programs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
