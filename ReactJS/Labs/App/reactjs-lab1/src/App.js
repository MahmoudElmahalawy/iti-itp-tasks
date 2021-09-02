import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./Components/Header";
import StudentAppCom from "./Components/StudentAppCom";
// import Home from "./Components/Home";

function App() {
	return (
		<>
			{/* <Home /> */}
			<Header />
			<div className="container">
				<StudentAppCom />
			</div>
		</>
	);
}

export default App;
