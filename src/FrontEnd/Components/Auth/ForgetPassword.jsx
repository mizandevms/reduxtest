import gsap from "gsap"
import React, {useEffect, useRef, useState} from "react"
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import forgetImg from "../../../images/undraw_forgot_password_re_hxwm.svg"
export default function ForgetPassword() {
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

	const [dataForget, setForget] = useState([])

	const {register, handleSubmit} = useForm()
	const onSubmit = (data, e) => {
		setForget([data, ...dataForget])
	}

	useEffect(() => {
		console.log("login", dataForget)
	}, [dataForget])

	return (
		<section className='flex flex-col justify-center items-center h-full w-full'>
			<div className='flex  justify-center space-x-3 items-center py-4'>
				<img className='h-32 w-auto' src={forgetImg} alt='img' />
				<h1 className='text-2xl font-extrabold text-cyan-700 py-2 px-4  capitalize' ref={boxRef}>
					Forget Password
				</h1>
			</div>
			<div className='w-full'>
				<form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto border border-gray-200 rounded-md shadow py-4 px-8'>
					<div className='flex flex-col justify-center items-center gap-1 py-2 w-full space-y-2'>
						<div className='flex flex-col justify-center items-center space-y-2 w-full'>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>Phone Number</span>
								<input type='text' {...register("phone")} name='phone' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md ' placeholder='01XXXXXXXXX' required />
							</div>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>Email Address</span>
								<input type='email' {...register("email")} name='email' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='example@mail.com' required />
							</div>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>Old Password</span>
								<input type='password' {...register("old password")} name='old password' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='***********' required />
							</div>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>New Password</span>
								<input type='password' {...register("new password")} name='new password' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='***********' required />
							</div>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>Confirm Password</span>
								<input type='password' {...register("confirm password")} name='confirm password' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='***********' required />
							</div>
						</div>
						<input type='submit' value='Set Password' className='border border-gray-200 px-4 py-2 w-1/3 mx-auto cursor-pointer rounded-md  shadow-sm bg-cyan-700  text-gray-50 hover:border-cyan-500 hover:bg-gray-100 hover:text-cyan-700 font-semibold text-sm' />
						<div className='flex justify-between  items-center  w-full'>
							<Link to='/login' className='py-2 text-sm  font-medium text-red-700 underline '>
								Login Here
							</Link>
							<Link to='/register' className='py-2 text-sm  font-medium text-cyan-700 underline '>
								Register Here
							</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}
