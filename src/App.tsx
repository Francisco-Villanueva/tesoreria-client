import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import { Login, HomePage } from './views'
import { observer } from 'mobx-react-lite'
import { useStore } from './models/root.store'

const App = observer(function () {
	const {
		users: { setLoggedUserId },
	} = useStore()
	const nav = useNavigate()
	useEffect(() => {
		const currentUser_ID = localStorage.getItem('userId')
		if (!currentUser_ID) {
			nav('/login')
		} else {
			setLoggedUserId(currentUser_ID)
		}
	}, [nav, setLoggedUserId])
	return (
		<main className="">
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	)
})

export default App
