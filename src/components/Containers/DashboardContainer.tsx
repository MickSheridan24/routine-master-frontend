import { useContext } from "react";
import { CurrentDashContext } from "../../contexts/ViewContexts";
import { DashboardName } from "../../types/enums";
import CreativeProjectDashboard from "../CreativeProjectDashboard/CreativeProjectDashboard";
import EducationDashboard from "../EducationDashboard/EducationDashboard";
import FinanceDashboard from "../FinanceDashboard/FinanceDashboard";
import HealthDashboard from "../HealthDashboard/HealthDashboard";
import MundaneDashboard from "../MundaneDashboard/MundaneDashboard";

export default function DashboardContainer(){
    const currentDash = useContext(CurrentDashContext).currentDash

    const getCurrentDash = () => {
        switch (currentDash) {
            case DashboardName.Health: return <HealthDashboard></HealthDashboard>
            case DashboardName.CreativeProject: return <CreativeProjectDashboard></CreativeProjectDashboard>
            case DashboardName.Finance: return <FinanceDashboard></FinanceDashboard>
            case DashboardName.Mundane: return <MundaneDashboard></MundaneDashboard>
            case DashboardName.Education: return <EducationDashboard></EducationDashboard>
            default:
                return <div>Home Dash</div>
        }
    }


    return getCurrentDash()
}