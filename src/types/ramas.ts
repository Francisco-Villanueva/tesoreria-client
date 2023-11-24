import { Instance, types } from "mobx-state-tree";
import { MemberModel } from "./member";

export const RAMAS_NAMES = [
  "alitas",
  "manada",
  "caravana",
  "unidad",
  "solar",
  "caminantes",
  "clan",
  "rovers",
  "dirigentes",
];
export type RamaName = keyof (typeof RAMAS_NAMES)[number];

export const RamaModel = types.model({
  _id: types.string,
  name: types.enumeration(RAMAS_NAMES),
  logo: types.optional(types.string, ""),
  color: types.optional(types.string, ""),
  members: types.array(MemberModel),
});

export type Rama = Instance<typeof RamaModel>;
