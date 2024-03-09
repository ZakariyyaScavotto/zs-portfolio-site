import React from "react"
import { Link } from "react-scroll"
import "../styles/TopNav.css"

class TopNav extends React.Component {
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll)
	}

	handleScroll = () => {
		const topNav = document.querySelector(".TopNav")
		if (window.scrollY > 0) {
			topNav.classList.add("hide")
		} else {
			topNav.classList.remove("hide")
		}
	}

	render() {
		return (
			<div className="TopNav">
				<Link className="Link" to="Resume" smooth={true} duration={500}>
					RESUME
				</Link>
				<Link className="Link" to="Projects" smooth={true} duration={500}>
					PROJECTS
				</Link>
			</div>
		)
	}
}

export default TopNav
