import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}
export function Title({ children, className }: Props) {
	return <h2 className={`text-xl font-semibold  ${className}`}>{children}</h2>
}
