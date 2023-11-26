import { Instance, types } from 'mobx-state-tree'

export const USER_ROLES = ['admin', 'dirigente']
export type UserRole = keyof (typeof USER_ROLES)[number]

export const UserModel = types.model({
	id: types.string,
	name: types.optional(types.string, ''),
	email: types.optional(types.string, ''),
	password: types.optional(types.string, ''),
	role: types.enumeration(USER_ROLES),
	ramaId: types.string,
})

export type User = Instance<typeof UserModel>
