import { ReactNode } from 'react'
import { TableLayout } from '.'

interface Props {
	children: ReactNode
}

export function TableHead({ children }: Props) {
	return (
		<TableLayout className=" bg-ligth-black font-semibold py-4 ">
			{children}
		</TableLayout>
	)
}
