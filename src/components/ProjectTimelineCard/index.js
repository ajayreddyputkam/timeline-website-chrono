// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {eachObject} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachObject

  return (
    <div className="project-main-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-name-time-container">
        <h1 className="project-name">{projectTitle}</h1>
        <div className="project-time-container">
          <AiFillCalendar className="project-time-icon" />
          <p className="project-time">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        className="project-anchor"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
