import { types } from 'mobx-state-tree'
import { UserModel, User } from '../types'

export const UserStore = types
	.model({
		users: types.array(UserModel),
		userLoggedId: types.optional(types.string, ''),
	})
	.views((store) => ({
		checkUserData(email: string, password: string) {
			const user = store.users.find((user) => user.email === email)
			if (!user) return false

			if (user.password === password) {
				return user
			}
		},
		get currentUser() {
			return store.users.find((user) => user.id === store.userLoggedId)
		},
	}))
	.actions((store) => ({
		setUsers(users: User[]) {
			store.users.push(...users)
		},
		setLoggedUserId(id: string) {
			store.userLoggedId = id
		},
	}))
