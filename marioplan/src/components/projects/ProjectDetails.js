import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    console.log(props);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ea soluta tenetur sint suscipit dolorem iure quidem nisi excepturi facere eveniet pariatur, beatae vel voluptates exercitationem consequatur quibusdam obcaecati. Ullam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd of September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
