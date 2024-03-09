import React from "react"
import "../styles/About.css"
import ZakImage from "../images/picOfZakDarkMode.jpg"
import TypeWriterEffect from "react-typewriter-effect"

class About extends React.Component {
	render() {
		return (
			<div id="About">
				<div id="AboutHead">
					<TypeWriterEffect
						startDelay={100}
						cursorColor="#0582caff"
						text="Hi, I'm Zakariyya Scavotto"
						typeSpeed={100}
						id="AboutHead"
						textStyle={{ textAlign: "center" }}
					/>
				</div>
				<img src={`${ZakImage}`} alt="Zakariyya Scavotto" id="AboutImage" />
				<p id="AboutText">
					I am a CS major in the Class of 2026 at the Stevens Institute of
					Technology. Most of my CS experience is in AI and Machine Learning,
					with some experience in Web Development. I also enjoy playing piano
					and violin, as well as video games.
				</p>
			</div>
		)
	}
}

export default About
