import gsap from "gsap"
import React, {useEffect, useRef, useState} from "react"
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import registerImg from "../../../images/undraw_access_account_re_8spm.svg"
export default function Register() {
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

	const [dataRegister, setRegister] = useState([])

	const {register, handleSubmit} = useForm()
	const onSubmit = (data, e) => {
		setRegister([data, ...dataRegister])
	}

	useEffect(() => {
		console.log("login", dataRegister)
	}, [dataRegister])

	return (
		<section className='flex flex-col justify-center items-center h-full w-full'>
			<div className='flex  justify-center space-x-3 items-center py-4'>
				<img className='h-32 w-auto' src={registerImg} alt='img' />
				<h1 className='text-2xl font-extrabold text-cyan-700 py-2 px-4  capitalize' ref={boxRef}>
					please register here
				</h1>
			</div>
			<div className='w-full'>
				<form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto border border-gray-200 rounded-md shadow py-4 px-8'>
					<div className='flex flex-col justify-center items-center gap-1 py-2 w-full space-y-2'>
						<div className='flex flex-col justify-center items-center space-y-2 w-full'>
							<div className='flex justify-between gap-x-4 items-center  w-full'>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-semibold '>First Name</span>
									<input type='text' {...register("firstName")} name='firstName' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md ' placeholder='first name' required />
								</div>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-semibold '>Last Name</span>
									<input type='text' {...register("lastName")} name='lastName' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md ' placeholder='last name' required />
								</div>
							</div>
							<div className='flex justify-between gap-x-4 items-center  w-full'>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-semibold '>Phone Number</span>
									<input type='text' {...register("phone")} name='phone' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md ' placeholder='01XXXXXXXXX' required />
								</div>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-semibold '>Email Address</span>
									<input type='email' {...register("email")} name='email' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='example@mail.com' required />
								</div>
							</div>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>Password</span>
								<input type='password' {...register("password")} name='password' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='***********' required />
							</div>
							<div className='flex flex-col  space-y-2  w-full'>
								<span className='text-cyan-700 text-sm font-semibold '>Confirm Password</span>
								<input type='password' {...register("password")} name='password' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='***********' required />
							</div>
						</div>
						<input type='submit' value='Register' className='border border-gray-200 px-4 py-2 w-1/3 mx-auto cursor-pointer rounded-md  shadow-sm bg-cyan-700  text-gray-50 hover:border-cyan-500 hover:bg-gray-100 hover:text-cyan-700 font-semibold text-sm' />
						<div className='flex justify-between  items-center  w-full'>
							<Link to='/login' className='py-2 text-sm  font-medium text-cyan-700 underline '>
								Login
							</Link>
							<Link to='/forget/password' className='py-2 text-sm  font-medium text-red-700 underline '>
								Forget Password
							</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}
