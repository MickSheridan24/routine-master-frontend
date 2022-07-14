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

    useEffect(() => {
        const refreshedSelected : ICreativeProject | undefined = projects
        .find(b => b.id === selectedProject?.id) ?? undefined
        setSelectedProject(refreshedSelected ? {...refreshedSelected} : undefined )
    }, [projects])

    return <div className="dashboard-container creative-project-theme">
            <div className="dashboard-column main">
                <h3>Projects</h3>
                <div className="dash-list">
                 {projects.map(p => <CreativeProject setSelectedProject={setSelectedProject} key={p.id} project = {p}></CreativeProject>)}
                </div>
                <CreativeProjectForm></CreativeProjectForm>
            </div>
            <hr />
            <div className="dashboard-column">
                <h3>Entries</h3>
                <h4>{selectedProject?.name}</h4>
                <div className="dash-list">
                    {selectedProject ? selectedProject.entries.map(e => <CreativeProjectEntry  projectId={selectedProject.id!} entry={e}></CreativeProjectEntry>) : <></>}
                </div>
                {selectedProject ? <CreativeProjectEntryForm projectId={selectedProject!.id!}></CreativeProjectEntryForm> : <></>}
            </div>
        </div>
}