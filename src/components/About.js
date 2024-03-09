import React from "react"
import "../styles/About.css"
import ZakImage from "../images/picOfZakDarkMode.jpg"
class About extends React.Component {
	render() {
		return (
			<div className="About">
				<h1 id="AboutHead">Hi, I'm Zakariyya Scavotto</h1>
				<img src={`${ZakImage}`} alt="Zakariyya Scavotto" id="AboutImage" />
				<p id="AboutText">
					I am a CS major in the Class of 2026 at the Stevens Institute of
					Technology. I have experience in a variety of computer science topics,
					with my favorites being AI and Machine Learning. I also enjoy playing
					piano and violin. To learn more about me, explore my experience below!
				</p>
			</div>
		)
	}
}

export default About
