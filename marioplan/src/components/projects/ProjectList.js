import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => { // We hgavce done "projects && " as an extra so that it doesn't not work when there's no project to show.
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList