import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Project_IPFS } from "../components/projects/projectIPFS";
import { Project_monTool } from "../components/projects/projectMonTool";
import { Project_drone } from "../components/projects/projectDrone";
import { Project_huffman } from "../components/projects/algorithms/huffman/huffman";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
export default function Home({ data }) {
 
  let content = [<Project_IPFS />, <Project_monTool />, <Project_drone />];
  let content_webApp =[<Project_IPFS />, <Project_monTool />, <Project_drone />];

  const [content_state, setContent_state] = useState(content)
  function tabs(tabs){
    return(
      <>
      <Tabs
        key="first"
        color="secondary"
        aria-label="App Type"
        radius="full"
        className="m-4 w-screen justify-center ">
        {
        tabs.map((e,i)=>(
          <Tab key={i} title={e.title}>
            

</Tab>
        ))}
        
      </Tabs>
      
      </>
    )
  }

  let content_types = [{title:'WebApp', content:tabs(content_state)}]

  return (
    <DefaultLayout>
     { tabs(content_types)}
{/*}
      <div className=" ">
        <div className="w-screen bg-red-500 text-center">
          Please note that my projects have been parked and moved to low-end
          devices. As a result, they may not be fully functional.{" "}
        </div>
        <div className="w-screen, justify-center">
        <Tabs
          key="first"
          color="secondary"
          aria-label="App Type"
          radius="full"
          className="m-4 w-screen justify-center "
        >
        <Tab key="type" title="Web App">
             <Tabs
          key="first"
          color="secondary"
          aria-label="App Type"
          radius="full"
          className="m-4 w-screen justify-center "
        >
        <Tab key="type" title="Web App">
            <Project_IPFS />
          </Tab>
        </Tabs>
          </Tab>
        </Tabs>
        </div>


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
