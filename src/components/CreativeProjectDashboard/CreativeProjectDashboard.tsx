import { useEffect, useState } from "react";
import { getResource } from "../../api/BaseApiUtilities";
import { ICreativeProject } from "../../types/CreativeProjectTypes";
import CreativeProject from "./components/CreativeProject";
import { CreativeProjectRefereshObs } from "./CreativeProjectService";
import CreativeProjectForm from "./forms/CreativeProjectForm";
import "./CreativeProjectStyles.css"
import { useResource } from "../../hooks/resourceHooks";
import { IBook } from "../../types/EducationTypes";

export default function CreativeProjectDashboard(){

    const [projects, setProjects] = useResource<ICreativeProject>("projects", CreativeProjectRefereshObs)


    return <div className="projects-container">
        {projects.map(p => <CreativeProject key={p.id} project = {p}></CreativeProject>)}
        <CreativeProjectForm></CreativeProjectForm>
    </div>

}