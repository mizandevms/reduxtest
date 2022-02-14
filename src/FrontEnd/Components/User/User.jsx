import {React, useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import img1 from "../../../images/undraw_add_information_j2wg.svg"

export default function User() {
	// dispatch is user for redux data sending
	// use selector is used for data fetchong from reducer
	const dispatch = useDispatch()
	const userState = useSelector(({user}) => user)

	useEffect(() => {
		console.log("userState", {userState})
	}, [userState])

	const [dataInput, setInput] = useState([])

	const {register, handleSubmit} = useForm()
	const onSubmit = (data, e) => {
		// setInput([data, ...dataInput])
		dispatch(data)
	}

	useEffect(() => {
		console.log(dataInput)
	}, [dataInput])
	return (
		<div className='p-4 space-y-4'>
			<img className='h-40  w-auto mx-auto' src={img1} alt='create user' />
			{/* add here */}
			<form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto border border-gray-200 rounded-md shadow p-4'>
				<div className='flex flex-col justify-center items-center gap-1 py-2 w-full '>
					<div className='flex flex-col justify-center items-center space-y-2 w-full'>
						<input type='text' {...register("name")} name='name' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-1 px-2 w-full ' placeholder='Write your name' required />
						<input type='email' {...register("email")} name='email' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-1 px-2 w-full ' placeholder='Write your email' required />
						<input type='text' {...register("phone")} name='phone' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-1 px-2 w-full ' placeholder='Write tyour phone number' required />
					</div>
					<input type='submit' className='border border-gray-200 px-4 py-1 w-1/3 mx-auto cursor-pointer rounded-md  shadow-sm bg-cyan-700  text-gray-50 hover:bg-gray-100 hover:text-cyan-700 font-semibold' />
				</div>
			</form>
		</div>
	)
}
