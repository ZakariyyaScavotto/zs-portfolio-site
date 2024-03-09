import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "../styles/Projects.css"
import eegProjectScreenshot from "../images/eegProjectScreenshot.png"
import newTabScreenshot from "../images/newTab.png"
class Projects extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentSlide: 0
		}
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
					wearer.The working paper can be found{" "}
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
			languages: ["JS (React),", "CSS"]
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

		return (
			<div className="Projects">
				<h1>Projects</h1>
				<div className="slideshow">
					<TransitionGroup>
						<CSSTransition
							key={this.state.currentSlide}
							timeout={500}
							classNames="fade"
						>
							<div className="slide">
								<div className="image-container">
									<img src={project.image} alt={project.title} />
								</div>
								<div className="text">
									<h2>{project.title}</h2>
									<p>{project.description}</p>
								</div>
								<div className="languages">
									{project.languages.map((language) => (
										<span key={language}>{language}</span>
									))}
								</div>
							</div>
						</CSSTransition>
					</TransitionGroup>
					<button id="prevButton" onClick={this.prevSlide}>
						Previous
					</button>
					<button id="nextButton" onClick={this.nextSlide}>
						Next
					</button>
				</div>
			</div>
		)
	}
}

export default Projects
