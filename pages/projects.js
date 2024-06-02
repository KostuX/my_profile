import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Project_IPFS } from "../components/projects/projectIPFS";
import React, { useState, useEffect } from "react";

import { Button, ButtonGroup } from "@nextui-org/react";
export default function Home({ data }) {
  let content = [<Project_IPFS />];

  return (
    <DefaultLayout>
      <div className="w-screen mb-24 place-content-center flex ">
        {" "}
        <ButtonGroup>
          <Button>IP-FS.cloud</Button>
          <Button>monTool</Button>
        </ButtonGroup>
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
