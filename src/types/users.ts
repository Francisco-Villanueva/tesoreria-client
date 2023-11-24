import { Instance, types } from 'mobx-state-tree'
import { RAMAS_NAMES } from '.'

export const USER_ROLES = ['admin', 'dirigente']
export type UserRole = keyof (typeof USER_ROLES)[number]

export const UserModel = types.model({
	_id: types.string,
	name: types.optional(types.string, ''),
	email: types.optional(types.string, ''),
	password: types.optional(types.string, ''),
	role: types.enumeration(USER_ROLES),
	rama: types.enumeration(RAMAS_NAMES),
})

export type User = Instance<typeof UserModel>
