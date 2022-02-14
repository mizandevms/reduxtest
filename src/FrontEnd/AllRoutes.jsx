import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
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
					</Routes>
				</div>
			</div>

			{/* <Footer /> */}
		</BrowserRouter>
	)
}
export default AllRoutes
