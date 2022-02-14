import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import AllRoutes from "./FrontEnd/AllRoutes"
import store from "./Redux/store"


function App() {
	return (
		<Provider store={store}>
			<AllRoutes />
		</Provider>
	)
}

export default App
