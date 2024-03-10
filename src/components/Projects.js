import React from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "../styles/Projects.css"
import eegProjectScreenshot from "../images/eegProjectScreenshot.png"
import newTabScreenshot from "../images/newTab.png"
import redditScrapingScreenshot from "../images/redditScraping.png"
import miniStockDashScreenshot from "../images/miniStockDash.png"
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
		this.languagesRef = React.createRef() // Create a ref for the languages div
		this.imageRef = React.createRef() // Create a ref for the image
	}

	// Array of project data
	projects = [
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
		},

		{
			title: (
				<a
					href="https://github.com/ZakariyyaScavotto/miniStockDash"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mini Stock Dashboard
				</a>
			),
			description: (
				<span>
					A simple dashboard made using the{" "}
					<a
						href="https://streamlit.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Streamlit
					</a>{" "}
					and yfinance Python libraries that allows the user to input a stock
					ticker to get a table of the company's price data, their balance sheet
					data, as well as the ability to plot any of the company's data points.
					There is also the option for a user to plot the data of multiple
					companies against each other for visual comparisons. Check it out live{" "}
					<a
						href="https://ministockdash.streamlit.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						here!
					</a>
				</span>
			),
			image: miniStockDashScreenshot,
			languages: ["Python"]
		},
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
					href="https://github.com/ZakariyyaScavotto/redditScraping"
					target="_blank"
					rel="noopener noreferrer"
				>
					Reddit Scraping
				</a>
			),
			description: (
				<span>
					A simple Python program I wrote to get more experience with working
					with APIs. It utilized the Reddit API to get the memes that matched
					the search terms given, and display those memes to the user.
				</span>
			),
			image: redditScrapingScreenshot,
			languages: ["Python"]
		}
	]

	// Function to go to the next slide
	nextSlide = () => {
		const { currentSlide } = this.state

		if (this.projects && Array.isArray(this.projects)) {
			this.setState(
				{
					currentSlide: (currentSlide + 1) % this.projects.length
				},
				() => setTimeout(this.adjustImageHeight, 500) // Delay call to adjustImageHeight
			)
		}
	}

	// Function to go to the previous slide
	prevSlide = () => {
		const { currentSlide } = this.state

		if (this.projects && Array.isArray(this.projects)) {
			this.setState(
				{
					currentSlide:
						(currentSlide - 1 + this.projects.length) % this.projects.length
				},
				() => setTimeout(this.adjustImageHeight, 500) // Delay call to adjustImageHeight
			)
		}
	}

	componentDidMount() {
		this.adjustImageHeight()
		window.addEventListener("resize", this.adjustImageHeight)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.adjustImageHeight)
	}

	adjustImageHeight = () => {
		const slide = this.nodeRef.current // Use nodeRef for the slide
		const languages = this.languagesRef.current
		const image = this.imageRef.current

		if (slide && languages && image) {
			const slideHeight = slide.offsetHeight
			const languagesHeight = languages.offsetHeight

			// Get the computed style of the languages div
			const style = window.getComputedStyle(languages)

			// Add the top and bottom margin to languagesHeight
			const marginTop = parseInt(style.marginTop, 10)
			const marginBottom = parseInt(style.marginBottom, 10)
			const totalLanguagesHeight = languagesHeight + marginTop + marginBottom

			image.style.maxHeight = `${slideHeight - totalLanguagesHeight}px`
		}
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
				<h1>My Projects</h1>
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
									<img
										src={project.image}
										alt={project.title}
										ref={this.imageRef}
										onLoad={this.adjustImageHeight}
									/>
									<div className="languages" ref={this.languagesRef}>
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
