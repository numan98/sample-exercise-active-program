import { defineStore } from "pinia";
import axios from "axios";

export const useProgramsStore = defineStore({
  id: "programs",
  state: () => ({
    programs: null,
  }),
  actions: {
    async loadPrograms() {
      if (this.programs === null) {
        const response = await axios.get("programs");
        this.programs = response.data;
      }
    },
  },
});
