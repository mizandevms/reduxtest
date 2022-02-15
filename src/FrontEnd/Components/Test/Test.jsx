import gsap from "gsap"
import React, {useEffect, useRef, useState} from "react"
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import testImg from "../../../images/login.svg"
export default function Test() {
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

	const [dataLogin, setLogin] = useState([])

	const {register, handleSubmit} = useForm()
	const onSubmit = (data, e) => {
		setLogin([data, ...dataLogin])
	}

	useEffect(() => {
		console.log("login", dataLogin)
	}, [dataLogin])

	return (
		<section className="h-screen w-full bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1572270947869-89e664b0792b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')]">
			<div className='grid grid-cols-6  justify-center items-center'>
				<div className='col-span-2 h-screen w-full bg-cyan-900 flex flex-col justify-center items-center space-y-4'>
					<img className='h-44 w-auto' src={testImg} alt='testImage' />
					<span className='text-2xl font-extrabold text-gray-50 capitalize'>Submit form successfully!!</span>
				</div>
				<div className='col-span-4 h-screen w-full bg-cyan-900 bg-opacity-60 flex flex-col justify-center items-center'>
					<form onSubmit={handleSubmit(onSubmit)} className='w-[45%] mx-auto bg-gray-200 border border-gray-200 rounded-md shadow-lg py-4 px-8'>
						<div className='flex flex-col justify-center items-center gap-1 py-2 w-full space-y-2'>
							<div className='flex flex-col justify-center items-center space-y-2 w-full'>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-medium '>Phone Number</span>
									<input type='text' {...register("phone")} name='phone' className='flex-1 text-sm border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md ' placeholder='01XXXXXXXXX' required />
								</div>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-medium '>Email Address</span>
									<input type='email' {...register("email")} name='email' className='flex-1 text-sm border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='example@mail.com' required />
								</div>
								<div className='flex flex-col  space-y-2  w-full'>
									<span className='text-cyan-700 text-sm font-medium '>Password</span>
									<input type='password' {...register("password")} name='password' className='flex-1 text-sm border border-gray-200 outline-none focus:ring-transparent py-2 px-2 w-full rounded-md' placeholder='***********' required />
								</div>
							</div>
							<input type='submit' value='Login' className='border  px-4 py-2 w-1/3 mx-auto cursor-pointer rounded-md  shadow-sm bg-gray-50  text-cyan-700 border-cyan-500 hover:bg-cyan-700 hover:text-gray-50 font-semibold text-sm' />
							<div className='flex justify-between  items-center  w-full'>
								<Link to='/register' className='py-2 text-sm  font-medium text-cyan-700 underline '>
									Register Here
								</Link>
								<Link to='/forget/password' className='py-2 text-sm  font-medium text-red-700 underline '>
									Forget Password
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
