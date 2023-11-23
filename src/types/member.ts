import { Instance, types } from "mobx-state-tree";

export const MEMEBER_STATUS = ["active", "inactive"];
export type MemberStatus = (typeof MEMEBER_STATUS)[number];

export const MemberModel = types.model({
  _id: types.string,
  name: types.string,
  lastName: types.string,
  dateOfBirth: types.string,
  balance: types.number,
  status: types.enumeration(MEMEBER_STATUS),
});

export type Member = Instance<typeof MemberModel>;
