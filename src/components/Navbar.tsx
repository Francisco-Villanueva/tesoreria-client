'use client'
import { observer } from 'mobx-react-lite'
export const Navbar = observer(function () {
	return (
		<nav className="flex justify-between items-center bg-white  w-full  m-auto border rounded-md px-4  ">
			<div className="flex">LOGO</div>
			<div>
				<button className="bg-white p-4 rounded-sm">Log out</button>
			</div>
		</nav>
	)
})
