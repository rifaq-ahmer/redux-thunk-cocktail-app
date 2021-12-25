import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SingleCocktail from "./pages/singleCocktail";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cocktails/:id" element={<SingleCocktail />} />
			</Routes>
		</div>
	);
}

export default App;
