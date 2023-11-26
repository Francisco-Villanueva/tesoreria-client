import { RootStore, RootStoreContext } from './models/root.store'
import { ReactNode, useEffect, useCallback } from 'react'
import { RamasServices } from './services'

import { UserServices } from './services/users.services'
type ProvidersProps = {
	children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
	const store = RootStore.create({
		members: {},
		ramas: {},
		users: {},
	})

	const setData = useCallback(async () => {
		RamasServices.getAllRamas().then((res) => {
			store.ramas.setRamas(res)
		})
		UserServices.getAllUsers().then((res) => {
			store.users.setUsers(res)
		})
	}, [store])
	useEffect(() => {
		setData()
	}, [setData])

	return (
		<RootStoreContext.Provider value={store}>
			{children}
		</RootStoreContext.Provider>
	)
}
