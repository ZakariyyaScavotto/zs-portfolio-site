import React from "react"
import "../styles/Resume.css"
import ResumePDF from "../docs/Zakariyya Scavotto Resume.pdf"

class Resume extends React.Component {
	render() {
		return (
			<div id="Resume">
				<iframe src={ResumePDF} id="pdfViewer" title="zsResume"></iframe>
			</div>
		)
	}
}

export default Resume
