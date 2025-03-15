import { History } from "@/views/History";
import { Home } from "@/views/Home";
import { Home as HomeIcon, History as HistoryIcon } from "lucide-react";

export interface Page {
  path: string;
  element: React.ReactNode;
  name: string;
  icon: React.ReactNode;
}

export const routes: Page[] = [
  {
    path: "/",
    element: <Home />,
    name: "בית",
    icon: <HomeIcon />,
  },
  {
    path: "/history",
    element: <History />,
    name: "היסטוריה",
    icon: <HistoryIcon />,
  },
];
