'use client'
import { ChangeEvent, FocusEvent, useState } from 'react'
import { EyeIcon, NotEyeIcon } from './Icons'
import { ErrorMessage } from '../hooks/useInput'

type InputProps = {
	placeholder: string
	type?: string
	className?: string
	value?: string
	error?: ErrorMessage
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void
}

export function Input({
	placeholder,
	type,
	className = '',
	value,
	error,
	onBlur,
	onFocus,
	onChange,
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false)

	const inputType = showPassword ? 'text' : type

	const STYLE_INPUT = `w-full   rounded-sm border-b border-darkGreen placeholder-darkGreen text-white   focus:outline-none bg-transparent placeholder-darkGreen::placeholder ${
		error ? 'border-error' : ''
	} `
	return (
		<div
			className={` flex  items-center  h-[45px] pb-5   relative mx-1 font-roboto w-full ${className}`}>
			<input
				value={value}
				type={inputType}
				onChange={onChange}
				onBlur={onBlur}
				onFocus={onFocus}
				placeholder={placeholder}
				defaultValue={value}
				className={STYLE_INPUT}
			/>

			{type === 'password' && (
				<button
					type="button"
					className="absolute right-5 h-full mr-2"
					onClick={() => {
						setShowPassword(!showPassword)
					}}>
					{showPassword ? (
						<EyeIcon className="h-5 w-5 text-white" />
					) : (
						<NotEyeIcon className="h-5 w-5 text-white" />
					)}
				</button>
			)}
			{true ? (
				<p className=" absolute bottom-0 left-0 rounded-sm   text-red text-xs   ">
					{error}
				</p>
			) : null}
		</div>
	)
}
