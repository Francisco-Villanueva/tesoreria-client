import { types } from "mobx-state-tree";
import { RamaModel, Rama } from "../types/ramas";

export const RamasStore = types
  .model({
    ramas: types.array(RamaModel),
    ramaId: types.optional(types.string, ""),
  })
  .views((store) => ({
    get selectedRama() {
      return store.ramas.find((rama) => rama._id === store.ramaId);
    },
    get selectedRamaCount() {
      return this.selectedRama?.members.length;
    },
    get activesCount() {
      return this.selectedRama?.members.filter(
        (member) => member.status === "active"
      ).length;
    },
    get inactivesCount() {
      return this.selectedRama?.members.filter(
        (member) => member.status === "inactive"
      ).length;
    },
    get totalDebt() {
      const result = this.selectedRama?.members.reduce(
        (a, b) => b.balance + a,
        0
      );

      return Math.floor(result ? result : 0);
    },
  }))

  .actions((store) => ({
    setRamas(data: Rama[]) {
      store.ramas.push(...data);
    },

    addTeam(team: Rama) {
      store.ramas.push(team);
    },
    setSelectedRama(id: string) {
      store.ramaId = id;
    },
  }));
