import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Project_IPFS } from "../components/projects/projectIPFS";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
export default function Home({ data }) {
  let content = [<Project_IPFS />];

  return (
    <DefaultLayout>
      <div className="w-screen place-content-center ">
        <Tabs
          key="secondary"
          color="secondary"
          aria-label="Tabs colors"
          radius="full"
        >
          <Tab key="ip-fs.cloud" title="ip-fs.cloud">
            <Project_IPFS />
          </Tab>
          <Tab key="monTool" title="monTool">
            2
          </Tab>
        </Tabs>
      </div>
    </DefaultLayout>
  );
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    let endpoint = "http:/localhost:3000/api/hello";
    let api_data = { data: "test api" };

    let response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(api_data),
      headers: { "Content-type": "application/json" },
    });
    let res = await response.json();
    let data = res;

    return {
      props: { data },
    };
  },

  ironOptions
);
