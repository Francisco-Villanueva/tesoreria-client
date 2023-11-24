import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}
export function Title({ children }: Props) {
	return <h2 className="text-xl font-semibold  ">{children}</h2>
}
