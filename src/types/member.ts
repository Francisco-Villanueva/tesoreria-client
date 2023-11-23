import { Instance, types } from "mobx-state-tree";

export const MEMEBER_STATUS = ["active", "inactive"];
export type MemberStatus = (typeof MEMEBER_STATUS)[number];

export const MemberModel = types.model({
  _id: types.optional(types.string, ""),
  name: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  dateOfBirth: types.optional(types.string, ""),
  balance: types.optional(types.number, 0),
  status: types.enumeration(MEMEBER_STATUS),
});

export type Member = Instance<typeof MemberModel>;
