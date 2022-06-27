import { useContext } from "react"
import { CurrentDashContext } from "../../contexts/ViewContexts"
import { DashboardName } from "../../types/enums"
import "./NavBarStyles.css"


export default function NavBar(){

    const dashboardContext = useContext(CurrentDashContext)

    
    return <div className="navbar">
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Home)}>Home</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Mundane)}>Mundane</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Health)}>Health</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Finance)}>Finance</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.Education)}>Education</button>
        <button onClick={() => dashboardContext.setCurrentDash(DashboardName.CreativeProject)}>CreativeProject</button>
    </div>
}
