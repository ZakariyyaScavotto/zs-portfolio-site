import React from "react"
import "../styles/ContactBar.css"

class ContactBar extends React.Component {
	render() {
		return (
			<div className="contact-bar">
				<a href="mailto:zakscav4@gmail.com">Email</a>
				<a href="https://www.linkedin.com/in/zakariyya-scavotto/">LinkedIn</a>
				<a href="https://github.com/ZakariyyaScavotto">GitHub</a>
			</div>
		)
	}
}

export default ContactBar
