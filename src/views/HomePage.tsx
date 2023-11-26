import { Content, Navbar, Sidebar } from '../components'

export function HomePage() {
	return (
		<div className=" flex flex-col h-[100vh] max-h-[100vh] w-full   text-blue gap-2 bg-ligth-black">
			<Navbar />

			<div className="flex max-sm:flex-col flex-grow p-4 gap-4 ">
				<Sidebar />
				<Content />
			</div>
		</div>
	)
}
