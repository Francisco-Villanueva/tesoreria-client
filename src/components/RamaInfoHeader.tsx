'use client'
import { observer } from 'mobx-react-lite'
import { useStore } from '../models/root.store'
import { MemberStatus, Title } from '../common'

export const RamaInfoHeader = observer(function () {
	const {
		ramas: {
			selectedRama,
			selectedRamaCount,
			activesCount,
			inactivesCount,
			totalDebt,
		},
	} = useStore()
	return (
		<article className=" h-full flex max-sm:flex-col max-sm:gap-2 items-center  justify-between rounded-md bg-blue text-white  p-4 max-sm:py-2">
			<section className=" max-sm:w-full">
				<Title>{selectedRama?.name}</Title>
				<div>Integrantes: {selectedRamaCount}</div>
			</section>

			<section className="flex  flex-col items-center ">
				<span> Deuda total</span>
				<Title>$ {totalDebt}</Title>
			</section>
			<section className=" flex gap-2  ">
				<div className="flex flex-col  items-center gap-0">
					<MemberStatus status="active" />
					<strong> {activesCount}</strong>
				</div>
				<div className="flex  flex-col items-center gap-0">
					<MemberStatus status="inactive" />
					<strong> {inactivesCount}</strong>
				</div>
			</section>
		</article>
	)
})
