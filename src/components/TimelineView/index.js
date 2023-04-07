// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="bg-main-container">
        <h1 className="my-journey-heading">
          MY JOURNEY OF <br />
          <span className="cc-heading">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              primary: '#0967d2',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
              cardForeColor: 'red',
              titleColor: '#0967d2',
            }}
          >
            {timelineItemsList.map(eachObject => {
              if (eachObject.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard
                    eachObject={eachObject}
                    key={eachObject.id}
                  />
                )
              }
              return (
                <ProjectTimelineCard
                  eachObject={eachObject}
                  key={eachObject.id}
                />
              )
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
