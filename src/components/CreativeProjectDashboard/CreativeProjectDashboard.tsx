import { useEffect, useState } from "react";
import { getResource } from "../../api/BaseApiUtilities";
import { ICreativeProject } from "../../types/CreativeProjectTypes";
import CreativeProject from "./components/CreativeProject";
import { CreativeProjectRefereshObs } from "./CreativeProjectService";
import CreativeProjectForm from "./forms/CreativeProjectForm";
import "./CreativeProjectStyles.css"
import { useResource } from "../../hooks/resourceHooks";
import CreativeProjectEntry from "./components/CreativeProjectEntry";
import CreativeProjectEntryForm from "./forms/CreativeProjectEntryForm";

export default function CreativeProjectDashboard(){

    const [projects, setProjects] = useResource<ICreativeProject>("projects", CreativeProjectRefereshObs)
    const [selectedProject, setSelectedProject] = useState<ICreativeProject>()

    return <div className="projects-dash">
            <div className="projects-container">
                <h3>Projects</h3>
                {projects.map(p => <CreativeProject setSelectedProject={setSelectedProject} key={p.id} project = {p}></CreativeProject>)}
                <CreativeProjectForm></CreativeProjectForm>
            </div>
            <hr />
            <div className="entries-container">
                <h3>Entries</h3>
                {selectedProject ? selectedProject.entries.map(e => <CreativeProjectEntry entry={e}></CreativeProjectEntry>) : <></>}
            
                {selectedProject ? <CreativeProjectEntryForm projectId={selectedProject!.id!}></CreativeProjectEntryForm> : <></>}
            </div>
        </div>
}