// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {eachObject} = props
  const {courseTitle, description, duration, tagsList} = eachObject

  return (
    <div className="course-main-container">
      <div className="course-name-time-container">
        <h1 className="course-name">{courseTitle}</h1>
        <div className="course-time-container">
          <AiFillClockCircle className="course-time-icon" />
          <p className="course-time">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="course-list-item">
            <p className="course-tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
