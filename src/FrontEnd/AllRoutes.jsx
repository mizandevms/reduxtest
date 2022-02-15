import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ForgetPassword from "./Components/Auth/ForgetPassword"
import Login from "./Components/Auth/Login"
import Register from "./Components/Auth/Register"
import User from "./Components/User/User"
import SideBar from "./Partials/SideBar/SideBar"
const Home = React.lazy(() => import("./Components/Home/Home"))
const Animation = React.lazy(() => import("./Components/Animation/Animation"))

const AllRoutes = () => {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<div className='grid grid-cols-6 gap-4'>
				<div className='col-span-1'>
					<SideBar />
				</div>
				<div className='App col-span-5 p-4'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<React.Suspense
									fallback='Loading...'
									//{
									// 	<div className='flex justify-center items-center h-full w-full'>
									// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
									// 		l
									// 	</div>
									// }
								>
									<Home />
								</React.Suspense>
							}
						/>
						<Route
							path='/animation'
							element={
								<React.Suspense
									fallback='Loading...'
									//{
									// 	<div className='flex justify-center items-center h-full w-full'>
									// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
									// 		l
									// 	</div>
									// }
								>
									<Animation />
								</React.Suspense>
							}
						/>
						<Route
							path='/create/user'
							element={
								<React.Suspense
									fallback='Loading...'
									//{
									// 	<div className='flex justify-center items-center h-full w-full'>
									// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
									// 		l
									// 	</div>
									// }
								>
									<User />
								</React.Suspense>
							}
						/>
						<Route
							path='/login'
							element={
								<React.Suspense
									fallback='Loading...'
									//{
									// 	<div className='flex justify-center items-center h-full w-full'>
									// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
									// 		l
									// 	</div>
									// }
								>
									<Login />
								</React.Suspense>
							}
						/>
						<Route
							path='/register'
							element={
								<React.Suspense
									fallback='Loading...'
									//{
									// 	<div className='flex justify-center items-center h-full w-full'>
									// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
									// 		l
									// 	</div>
									// }
								>
									<Register />
								</React.Suspense>
							}
						/>
						<Route
							path='/forget/password'
							element={
								<React.Suspense
									fallback='Loading...'
									//{
									// 	<div className='flex justify-center items-center h-full w-full'>
									// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
									// 		l
									// 	</div>
									// }
								>
									<ForgetPassword />
								</React.Suspense>
							}
						/>
					</Routes>
				</div>
			</div>

			{/* <Footer /> */}
		</BrowserRouter>
	)
}
export default AllRoutes
