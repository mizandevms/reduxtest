import React from "react"
import {Link} from "react-router-dom"

export default function SideBar() {
	return (
		<div className='h-screen bg-cyan-900 bg-opacity-70 p-4 text-gray-50 flex flex-col space-y-3'>
			<Link to='/' className='py-2  font-bold   hover:underline'>
				Home
			</Link>
			<Link to='/animation' className='py-2  font-bold   hover:underline'>
				Animation Test
			</Link>
		</div>
	)
}
