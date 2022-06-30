import { ICreativeProject } from "../../../types/CreativeProjectTypes";
import CreativeProjectEntry from "./CreativeProjectEntry";

export default function CreativeProject(props: {project: ICreativeProject}){
    const {project} = props;
    return <div className="project-container">
        <div className="name">
        {project.name}
        </div>
        <div className="description">{project.description}</div>

        {project.entries.map(e => <CreativeProjectEntry key={e.id} entry={e}></CreativeProjectEntry>)}
    </div>
}