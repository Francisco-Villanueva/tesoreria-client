import { RootStore, RootStoreContext } from './models/root.store'
import { ReactNode, useEffect } from 'react'
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

	useEffect(() => {
		RamasServices.getAllRamas().then((res) => {
			store.ramas.setRamas(res)
		})
		UserServices.getAllUsers().then((res) => {
			store.users.setUsers(res)
		})
	}, [store])

	return (
		<RootStoreContext.Provider value={store}>
			{children}
		</RootStoreContext.Provider>
	)
}
