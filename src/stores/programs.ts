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
    async toggleEnrolState(programId: number, enrolState: boolean) {
      var program = this.programs.find(x => x.id == programId)
      if(program.enrolled != enrolState) {
        const response = await axios.patch(`programs/${programId}`, { enrolled: enrolState });
        if(response.status == 204) {
          var index = this.programs.indexOf(program)
          program.enrolled = enrolState;
          this.programs[index] = program
        }
        else {
          //console.log(response.status)
        }
      }
    },
    async getTeamDetails(programId: number) {
      const response = await axios.get(`programs/${programId}/team`);
        if(response.status == 200) {
          return response.data
        }
        else if(response.status == 404) {
          console.log('Not enrolled to program')
        }
    }
  }
});
