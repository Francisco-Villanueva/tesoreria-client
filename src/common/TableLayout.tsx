import { MouseEvent, ReactNode } from 'react'
interface Props {
	children: ReactNode
	className?: string
	onClick?: (event: MouseEvent) => void
}
export function TableLayout({ children, className, onClick }: Props) {
	return (
		<div
			onClick={onClick}
			className={` p-2  grid text-blue gap-4  rounded-b-lg ${className} `}
			style={{ gridTemplateColumns: '.2fr 1fr 1fr 1fr' }}>
			{children}
		</div>
	)
}
