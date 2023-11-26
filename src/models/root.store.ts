'use client'
import { createContext, useContext } from 'react'
import { types, Instance, SnapshotOut } from 'mobx-state-tree'
import { MemberStore } from './member.store'
import { RamasStore } from './rama.store'
import { UserStore } from './user.store'

export const RootStore = types.model({
	members: types.late(() => MemberStore),
	ramas: types.late(() => RamasStore),
	users: types.late(() => UserStore),
})

export const useStore = () => {
	const store = useContext(RootStoreContext)
	if (!store) {
		throw new Error('useRootStore debe usarse dentro de un RootStoreProvider')
	}
	return store
}

export const RootStoreContext = createContext<Instance<
	typeof RootStore
> | null>(null)
export type RootStoreInstance = Instance<typeof RootStore>
export type RootStoreSnapshot = SnapshotOut<typeof RootStore>
