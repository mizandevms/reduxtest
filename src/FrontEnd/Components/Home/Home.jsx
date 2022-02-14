import {gsap} from "gsap"
import React, {useEffect, useRef} from "react"
import {Link} from "react-router-dom"
import img1 from "../../../images/undraw_all_the_data_re_hh4w.svg"
import img2 from "../../../images/undraw_report_re_f5n5.svg"

const Home = () => {
	// animation
	const boxRef = useRef()

	useEffect(() => {
		gsap.fromTo(
			boxRef.current,
			{
				x: 100,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
			}
		)
	})
	return (
		<div className='w-full space-y-4'>
			<div className='flex justify-center space-x-3 items-center py-4'>
				<img className='h-36 w-auto' src={img1} alt='img' />
				<h1 className='text-2xl font-extrabold text-cyan-700 py-2 px-4  capitalize' ref={boxRef}>
					{" "}
					All data
				</h1>
				<img className='h-36 w-auto' src={img2} alt='img' />
			</div>
			<div className='flex justify-end '>
				<Link to='/create/user' className='border border-gray-200 px-4 py-1 capitalize w-max mr-0 cursor-pointer rounded-md  shadow-sm bg-cyan-700  text-gray-50 hover:bg-gray-100 hover:text-cyan-700 font-semibold'>
					create user
				</Link>
			</div>
			<div className='p-4 border border-gray-200 rounded-md shadow-md bg-gray-50'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead className='bg-gray-50'>
						<tr>
							<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Name
							</th>
							<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Title
							</th>
							<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Email
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>person.name</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>person.title</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>person.email</td>
						</tr>
						<tr>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>person.name</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>person.title</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>person.email</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
