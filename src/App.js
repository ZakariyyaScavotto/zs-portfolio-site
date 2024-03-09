import "./styles/App.css"
import TopNav from "./components/TopNav"
import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import BottomBar from "./components/BottomBar"
import SideInfo from "./components/SideInfo"

function App() {
	return (
		<div className="App">
			<TopNav />
			<SideInfo />
			<About />
			<Resume />
			<Projects />
			<BottomBar />
		</div>
	)
}

export default App
