import DefaultLayout from "../layouts/default";
import { Index_block5 } from "../components/index/contact";
import React, { useState, useEffect } from "react";

export default function Home({ data }) {
  return (
    <DefaultLayout>
      <Index_block5 className="mt-12" />
    </DefaultLayout>
  );
}
