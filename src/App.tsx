import { Route, Routes } from 'react-router'
import { Login, HomePage } from './views'

export default function App() {
	return (
		<main className="">
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	)
}
