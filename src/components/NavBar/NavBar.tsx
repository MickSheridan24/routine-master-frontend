import { useContext } from "react"
import { CurrentDashContext } from "../../contexts/ViewContexts"
import { DashboardName } from "../../types/enums"


export default function NavBar(){

    const dashboardContext = useContext(CurrentDashContext)

    const getClassName = () => {
        switch(dashboardContext.currentDash){
            case DashboardName.CreativeProject: return "navbar creative-project-theme"
            case DashboardName.Health: return "navbar health-theme"
            case DashboardName.Mundane: return "navbar mundane-theme"
            case DashboardName.Education: return "navbar education-theme"
            case DashboardName.Finance: return "navbar finance-theme"
        }
    }
    
    return <div className={getClassName()}>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Mundane)}>Mundane</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Health)}>Health</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Finance)}>Finance</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Education)}>Education</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.CreativeProject)}>Creative Projects</button>
    </div>
}
