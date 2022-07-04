import { ICreativeProject } from "../../../types/CreativeProjectTypes";
import { deleteCreativeProject } from "../CreativeProjectService";
import CreativeProjectEntry from "./CreativeProjectEntry";

export default function CreativeProject(props: {project: ICreativeProject, setSelectedProject: (_:ICreativeProject) => void}){
    const {project, setSelectedProject} = props;
    return <div onClick={() => setSelectedProject(project)} className="project-container">
        <div className="info"> 
            <div className="name">
            {project.name}
            </div>
            <div className="description">{project.description}</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteCreativeProject(project.id!)}}>X
            </div>
        </div>
    </div>
}