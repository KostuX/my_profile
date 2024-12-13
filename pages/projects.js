import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Project_IPFS } from "../components/projects/projectIPFS";
import { Project_monTool } from "../components/projects/projectMonTool";
import { Project_drone } from "../components/projects/projectDrone";
import { Project_huffman } from "../components/projects/algorithms/huffman/huffman";
import { Project_fixTuneMotors } from "../components/projects/fixtunemotors";
import React, { useState } from "react";
import { Tabs, Tab, Divider } from "@nextui-org/react";
export default function Home({ data }) {
  let content_webApp = [
    { title: "IPFS", content: <Project_IPFS /> },
    { title: "monTool", content: <Project_monTool /> },
    { title: "Drone (Game)", content: <Project_drone /> },
  ];
  let content_algo = [{ title: "Huffman", content: <Project_huffman /> }];
  let content_other = [{ title: "COVID-19 simulator", content: <></> }];

  function tabs(tabs) {
    return (
      <Tabs
        key="first"
        color="secondary"
        aria-label="App Type"
        radius="full"
        className="mt-2 w-screen justify-center "
      >
        {tabs.map((e, i) => (
          <Tab key={i} title={e.title}>
            {e.content}
          </Tab>
        ))}
      </Tabs>
    );
  }

  let content_types = [
    { title: "WebApp", content: tabs(content_webApp) },
    { title: "Algorithms", content: tabs(content_algo) },
    { title: "Other", contetn: tabs(content_other) },
  ];

  return (
    <DefaultLayout>
      <div className="mt-6"> {/*tabs(content_types)*/}</div>
      <Project_IPFS /> 
      <Divider/>
     <div className="mt-24"><Project_monTool /></div> 
     <Divider />
     <div className="mt-24"> <Project_fixTuneMotors /> </div>
     <Divider />
     <div className="mt-24"> <Project_drone /> </div>
     

      {/*}
     


        <div >
          <Tabs
          key="secondary"
          color="secondary"
          aria-label="apps"
          radius="full"
          className="m-4 w-screen justify-center "
        >
          <Tab key="ip-fs.cloud" title="ip-fs.cloud">
            <Project_IPFS />
          </Tab>
          <Tab key="monTool" title="monTool">
            <Project_monTool />
          </Tab>
          <Tab key="drone" title="Drone (game)">
            <Project_drone />
          </Tab>
          <Tab key="huffman" title="Huffman">
            <Project_huffman />
          </Tab>
          <Tab key="COVID" title="Covid-19 simulator" isDisabled>
            <Project_huffman />
          </Tab>
          <Tab key="genAlgo" title="Genetic Algorithm" isDisabled>
            <Project_huffman />
          </Tab>
          <Tab key="ADAline" title="ADAline" isDisabled>
            <Project_huffman />
          </Tab>
          <Tab key="paterns" title="Paterns" isDisabled>
            <Project_huffman />
          </Tab>
        </Tabs></div>
       
        
      </div>

      {*/}
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
