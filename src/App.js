import "./styles/App.css"
import TopNav from "./components/TopNav"
import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import ContactBar from "./components/ContactBar"
import SideInfo from "./components/SideInfo"

function App() {
	return (
		<div className="App">
			<TopNav />
			<About />
			<Resume />
			<Projects />
			<ContactBar />
		</div>
	)
}

export default App
