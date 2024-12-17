import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Project_drone } from "../components/projects/projectDrone";
import { Project_fixTuneMotors } from "../components/projects/fixtunemotors";
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
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    let data = {};
    return {
      props: { data },
    };
  },

  ironOptions
);
