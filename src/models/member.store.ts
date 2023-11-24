import { types } from "mobx-state-tree";
import { MemberModel, Member } from "../types/member";

export const MemberStore = types
  .model({
    members: types.array(MemberModel),
    memberSelected: types.optional(types.string, ""),
  })
  .views((store) => ({
    get memberCount() {
      return store.members.length;
    },

    get selectedMember() {
      return store.members.find((member) => member.id === store.memberSelected);
    },
  }))
  .actions((store) => ({
    setMembers(members: Member[]) {
      store.members.push(...members);
    },
    addMember(member: Member) {
      store.members.push(member);
    },
    setSelectedMember(memberId: string) {
      store.memberSelected = memberId;
    },
  }));
