import img from './projectimg.png';
// import project from './projects.json';

function ProjectCard({project}){
    const url = './' + project.project_img;
    if(project.project_id % 2 == 0){
        return(
            <div className='card'>
                <div className='horizontal-line-left d-none d-md-block'/>
                    <div className='row g-0'>
                        <div className='col-sm-4'>
                            <img src={img} alt='...'/>
                        </div>
                        <div className='col-sm-6'>
                            <div className='card-body'>
                                <h5 className='card-title text'>{project.project_name}</h5>
                                <p className='card-text text'>{project.project_description}</p>
                                <a href='#projects-7'>Text for the link</a>
                            </div>
                    </div>
                </div>
          </div>
        );
    } else {
        return(
            <div className='card'>
                <div className='horizontal-line-right d-none d-md-block'/>
                    <div className='row g-0'>
                        <div className='col-sm-4'>
                            <img src={project.project_img} className='crow' alt='...'/>
                        </div>
                        <div className='col-sm-6'>
                            <div className='card-body'>
                                <h5 className='card-title text'>{project.project_name}</h5>
                                <p className='card-text text'>{project.project_description}</p>
                                <a href='#projects-7'>Text for the link</a>
                            </div>
                    </div>
                </div>
          </div>
        );
    }
    
}

export default ProjectCard;

          
{/* <ProjectCard project={projects[0]}/>

<ProjectCard project={projects[1]}/>

<ProjectCard project={projects[3]}/>

<ProjectCard project={projects[5]}/> */}