import React from "react"
import "../styles/SideInfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
const SideInfo = () => {
	return (
		<div className="sideInfo">
			<a href="mailto:zakscav4@gmail.com">
				<FontAwesomeIcon icon={faEnvelope} size="2x" />
			</a>
			<a
				href="https://www.linkedin.com/in/zakariyya-scavotto/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
			</a>
			<a
				href="https://github.com/ZakariyyaScavotto"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>
		</div>
	)
}

export default SideInfo
