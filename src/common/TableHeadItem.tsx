import { ReactNode } from 'react'
interface Props {
	children: ReactNode
}

export function TableHeadItem({ children }: Props) {
	return <span className={` `}>{children}</span>
}
