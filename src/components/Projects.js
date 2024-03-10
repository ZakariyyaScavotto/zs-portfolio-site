import React from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "../styles/Projects.css"
import eegProjectScreenshot from "../images/eegProjectScreenshot.png"
import newTabScreenshot from "../images/newTab.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {
	faPython,
	faJs,
	faCss3,
	faHtml5
} from "@fortawesome/free-brands-svg-icons"
class Projects extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentSlide: 0
		}
		this.nodeRef = React.createRef() // Create a ref
	}

	// Array of project data
	projects = [
		{
			title: (
				<a
					href="https://github.com/ZakariyyaScavotto/EEG-based-Emotion-Recognition-in-Music"
					target="_blank"
					rel="noopener noreferrer"
				>
					EEG-based Emotion Recognition in Music
				</a>
			),
			description: (
				<span>
					A research project I conducted in high school alongside a professor at
					a local university, where I wrote Python code to train a SVM-based
					machine learning model to predict someone's emotional response to
					music. I also created a demonstration application where an EEG headset
					could be connected, and it would predict the emotional response of the
					wearer. The working paper I wrote can be found{" "}
					<a
						href="https://mars.gmu.edu/items/34eda27d-0441-4612-9a66-9fe94ad8eb47"
						target="_blank"
						rel="noopener noreferrer"
					>
						here!
					</a>
				</span>
			),
			image: eegProjectScreenshot,
			languages: ["Python"]
		},
		{
			title: (
				<a
					href="https://github.com/ZakariyyaScavotto/my-new-tab-react/tree/master"
					target="_blank"
					rel="noopener noreferrer"
				>
					Personal New Tab
				</a>
			),
			description: (
				<span>
					A website I created that I use as my browser's new tab page using
					React as a Javascript framework with standard CSS. It features links
					on the bottom to sites I visit frequently, a clock on the top that I
					made using Javascript, my "regular" schedule for the day on the right
					that changes days using React states, and a randomized inspirational
					quote on the left. You can take a look at it live{" "}
					<a
						href="https://zs-new-tab.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						here!
					</a>
				</span>
			),
			image: newTabScreenshot,
			languages: ["JS (React)", "CSS", "HTML"]
		}
	]

	// Function to go to the next slide
	nextSlide = () => {
		this.setState((prevState) => ({
			currentSlide: (prevState.currentSlide + 1) % this.projects.length
		}))
	}

	// Function to go to the previous slide
	prevSlide = () => {
		this.setState((prevState) => ({
			currentSlide:
				(prevState.currentSlide - 1 + this.projects.length) %
				this.projects.length
		}))
	}

	render() {
		const project = this.projects[this.state.currentSlide]
		const languageIcons = {
			Python: faPython,
			"JS (React)": faJs,
			CSS: faCss3,
			HTML: faHtml5
		}
		return (
			<div id="Projects">
				<h1>Projects</h1>
				<div className="slideshow">
					<SwitchTransition>
						<CSSTransition
							key={this.state.currentSlide}
							timeout={500}
							classNames="fade"
							nodeRef={this.nodeRef}
							// onEntered={this.adjustFontSize}
						>
							<div className="slide" ref={this.nodeRef}>
								<div className="image-container">
									<img src={project.image} alt={project.title} />
									<div className="languages">
										{project.languages.map((language) => (
											<span key={language}>
												<FontAwesomeIcon icon={languageIcons[language]} />
											</span>
										))}
									</div>
								</div>
								<div className="text">
									<h2>{project.title}</h2>
									<p>{project.description}</p>
								</div>
							</div>
						</CSSTransition>
					</SwitchTransition>
					<div className="button-container">
						<button id="prevButton" onClick={this.prevSlide}>
							<FontAwesomeIcon icon={faArrowLeft} size="2x" />
						</button>
						<button id="nextButton" onClick={this.nextSlide}>
							<FontAwesomeIcon icon={faArrowRight} size="2x" />
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects
