import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Index_block5 } from "../components/index/block5";
import React, { useState, useEffect } from "react";

export default function Home({ data }) {
  return (
    <DefaultLayout>
      <Index_block5 className="mt-12" />
    </DefaultLayout>
  );
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    let data = null;
    return {
      props: { data },
    };
  },

  ironOptions
);
