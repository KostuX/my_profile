import DefaultLayout from "../layouts/default";

import { Project_drone } from "../components/projects/projectDrone";

import { Projects_layout } from "../layouts/projects_layout"
import { projects_cfg } from "../config/cfg_projects"
import React from "react";
import { Divider } from "@nextui-org/react";
export default function Project() {

  return (
    <DefaultLayout>
      {projects_cfg.map((project) => (<>
        <Projects_layout project={project} />
        <Divider />
      </>))}

      <div className="mt-24"> <Project_drone /> </div>
    </DefaultLayout>
  );
}
