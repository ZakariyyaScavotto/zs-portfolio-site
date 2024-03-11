import React from "react"
import "../styles/About.css"
import ZakImage from "../images/picOfZakDarkMode.jpg"
import TypeWriterEffect from "react-typewriter-effect"

class About extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isAboutHeadInView: false }
		this.aboutHeadRef = React.createRef()
	}

	componentDidMount() {
		this.adjustMargin()
		window.addEventListener("resize", this.adjustMargin)

		// Create an intersection observer
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Set state to start the typing animation
					this.setState({ isAboutHeadInView: true })
					// Disconnect the observer after the animation has started
					this.observer.disconnect()
				}
			})
		})

		// Start observing the AboutHead element
		this.observer.observe(this.aboutHeadRef.current)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.adjustMargin)
	}

	adjustMargin = () => {
		const topNav = document.querySelector("#TopNav")
		const aboutHead = document.querySelector("#AboutHead")

		if (topNav && aboutHead) {
			aboutHead.style.marginTop = `${topNav.offsetHeight}px`
		}
	}

	render() {
		return (
			<div id="About">
				<div id="AboutHead" ref={this.aboutHeadRef}>
					{this.state.isAboutHeadInView && (
						<TypeWriterEffect
							startDelay={100}
							cursorColor="#0582caff"
							text="Hi, I'm Zakariyya Scavotto"
							typeSpeed={100}
							id="AboutHead"
							textStyle={{ textAlign: "center" }}
						/>
					)}
				</div>
				<img src={`${ZakImage}`} alt="Zakariyya Scavotto" id="AboutImage" />
				<p id="AboutText">
					I am a CS major in the Class of 2026 at the Stevens Institute of
					Technology. Most of my CS experience is in AI and Machine Learning,
					with some experience in Web Development. I enjoy playing piano and
					violin, and I am an avid gamer!
				</p>
			</div>
		)
	}
}

export default About
