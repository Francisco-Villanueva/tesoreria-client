import { observer } from 'mobx-react-lite'
import useInput from '../hooks/useInput'
import { Input } from '../common/Input'
import { Title } from '../common'
import { Button } from '../common/Button'
import { FormEvent } from 'react'
import { message } from 'antd'
import { useStore } from '../models/root.store'
import { useNavigate } from 'react-router-dom'

export const Login = observer(function () {
	const {
		users: { checkUserData, setLoggedUserId },
		ramas: { setSelectedRama },
	} = useStore()
	const user = useInput('', 'required')
	const password = useInput('', 'required')

	const nav = useNavigate()
	const handleLogin = (e: FormEvent) => {
		e.preventDefault()
		const userToCheck = checkUserData(user.value, password.value)

		if (userToCheck) {
			localStorage.setItem('userId', userToCheck.id)
			setLoggedUserId(userToCheck.id)
			setSelectedRama(userToCheck.ramaId)
			message.success(`Welcome ${userToCheck.name}`)
			nav('/home')
		} else {
			message.error('Invalid Credential')
		}
	}
	return (
		<div className=" flex relative ">
			<section className="w-1/2 h-[100vh] bg-white p-10">
				<Title className="text-blue ">Tesoreria Comunitaria</Title>
			</section>
			<section className="w-1/2 h-[100vh] bg-blue rounded-l-[12rem]"></section>
			<form
				onSubmit={handleLogin}
				className="flex flex-col justify-center items-center gap-8 bg-[rgba(0,0,0,.8)] rounded-3xl max-sm:w-[90%] h-1/2 w-1/3 p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
				<Input placeholder="Mail" type="text" {...user} />
				<Input placeholder="Password" type="password" {...password} />

				<Button
					className="w-2/3 rounded-md "
					disabled={user.value === '' || password.value === ''}>
					Submit
				</Button>
			</form>
		</div>
	)
})
