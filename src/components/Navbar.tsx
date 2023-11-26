'use client'
import { observer } from 'mobx-react-lite'
import { useStore } from '../models/root.store'
import { Button } from '../common/Button'
import useModal from '../hooks/useModal'
import { useNavigate } from 'react-router'
export const Navbar = observer(function () {
	const {
		users: { currentUser, setLoggedUserId },
	} = useStore()

	const { isModalOpen, toggleModal } = useModal()

	const nav = useNavigate()
	const handleLogout = () => {
		localStorage.clear()
		setLoggedUserId('')
		nav('/login')
	}
	return (
		<nav className="flex justify-end items-center px-4 p-2 bg-white border-b w-full ">
			<div className="relative">
				<Button variant="secondary" className="rounded-md" onClick={toggleModal}>
					{currentUser?.name}
				</Button>

				{isModalOpen && (
					<div className="absolute flex flex-col items-center  border w-full gap-2 ">
						<Button
							variant="text"
							className=" rounded-md bg-none p-0"
							onClick={handleLogout}>
							LogOut
						</Button>
					</div>
				)}
			</div>
		</nav>
	)
})
