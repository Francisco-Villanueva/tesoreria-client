import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ShortArrowIcon } from './Icons'
import { useStore } from '../models/root.store'
import { Rama } from '../types/ramas'
interface Props {
	item: Items
}

interface Items {
	name: string
	type: string
	route: string
	content: Rama[]
}
export const SideItem = observer(function ({ item }: Props) {
	const [open, setOpen] = useState(false)

	const {
		ramas: { setSelectedRama },
	} = useStore()
	const handleSelectRama = (rama: Rama) => {
		setSelectedRama(rama.id)
	}
	return (
		<div className="flex flex-col  p-2">
			<div
				className={` flex justify-between   text-black cursor-pointer transition-all duration-200 `}>
				<p className="font-semibold">{item.name}</p>
				{item.type === 'dynamic' && (
					<button className="" onClick={() => setOpen(!open)}>
						<ShortArrowIcon
							className={`w-3 transition-all duration-150 ${
								open ? 'rotate-[-90deg]' : 'rotate-[0]'
							}`}
						/>
					</button>
				)}
			</div>

			{open && (
				<div className="flex flex-col ml-2">
					{item.content.map((item: Rama) => (
						<button onClick={() => handleSelectRama(item)} className=" text-start">
							{item.name}
						</button>
					))}
				</div>
			)}
		</div>
	)
})
