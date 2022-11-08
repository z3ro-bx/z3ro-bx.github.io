import ProjectCard from './ProjectCard';
import projects from './projects.json';

function ProjectGrid(){
    return(
        <div>
            {projects.map((project) => (
                <ProjectCard key={project.project_id} project={project}/>
            ))}
        </div>
    )
}

export default ProjectGrid;