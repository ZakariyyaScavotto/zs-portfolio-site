import React from "react"
import "../styles/TopNav.css"
class TopNav extends React.Component {
	render() {
		return (
			<div className="TopNav">
				<a href="#about">ABOUT</a>
				<a href="#resume">RESUME</a>
				<a href="#projects">PROJECTS</a>
				<a href="#contact">CONTACT</a>
			</div>
		)
	}
}

export default TopNav
