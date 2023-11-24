import { Content, Navbar, Sidebar } from './components'

export default function App() {
	return (
		<main className="flex flex-col h-[100vh] max-h-[100vh] w-full  text-blue gap-2 bg-ligth-black">
			<Navbar />

			<div className="flex flex-grow p-4 gap-4 ">
				<Sidebar />
				<Content />
			</div>
		</main>
	)
}
