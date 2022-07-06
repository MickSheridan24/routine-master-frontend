import { ICreativeProject } from "../../../types/CreativeProjectTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteCreativeProject } from "../CreativeProjectService";
import CreativeProjectEntry from "./CreativeProjectEntry";

export default function CreativeProject(props: {project: ICreativeProject, setSelectedProject: (_:ICreativeProject) => void}){
    const {project, setSelectedProject} = props;
    const completion = project.entries.reduce((m, e) => e.percentCompleted + m, 0)

    return <div onClick={() => setSelectedProject(project)} className="dash-item">
        <div className="info"> 
            <h4 className="name">
            {project.name}
            </h4>
            <div className="description"><em>{project.description}</em></div>
            <div style={{marginTop: "12px"}}>
                <HealthBar total={100} amount={completion} redOn="None"></HealthBar>
            </div>
      
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteCreativeProject(project.id!)}}>X
            </div>
        </div>
    </div>
}