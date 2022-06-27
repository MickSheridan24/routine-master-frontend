import { createContext, Dispatch, SetStateAction } from "react";
import { DashboardName } from "../types/enums";

export const CurrentDashContext = createContext<{currentDash: DashboardName, setCurrentDash: Dispatch<SetStateAction<DashboardName>>}>
({currentDash: DashboardName.Home, setCurrentDash: () => {}});

