import { observer } from 'mobx-react-lite'
import { RamaInfo } from '../views/RamaInfo'
import { useStore } from '../models/root.store'

export const Content = observer(function Content() {
	const {
		ramas: { selectedRama },
	} = useStore()

	return (
		<section className="border rounded-md p-4 flex   flex-grow bg-white  max-sm:text-sm">
			{selectedRama ? <RamaInfo /> : 'No Rama Selected'}
		</section>
	)
})
