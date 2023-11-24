import { SideItem } from '../common'
import { useStore } from '../models/root.store'

export function Sidebar() {
	const {
		ramas: { ramas },
	} = useStore()

	//TODO TIPAR ESTO Y MANDARLO A UN ARCHIVO TYPES
	const sideItems = [
		{
			name: 'Panel de Control',
			type: 'static',
			content: [],
		},
		{
			name: 'Ramas',
			type: 'dynamic',
			content: ramas,
		},
		{
			name: 'CFA',
			type: 'static',
			content: ramas,
		},
	]
	return (
		<aside className="bg-white flex flex-col border rounded-md  gap-2  p-2 ">
			<header className="font-bold p-4 grid place-items-center  rounded-md relative">
				TESORERIA
			</header>

			<div className="flex flex-col gap-1">
				{sideItems.map((item) => (
					<SideItem item={item} />
				))}
			</div>
		</aside>
	)
}
